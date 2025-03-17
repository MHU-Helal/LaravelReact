<?php
class ReactBillDetail extends Model implements JsonSerializable{
	public $id;
	public $bill_id;
	public $description;
	public $amount;

	public function __construct(){
	}
	public function set($id,$bill_id,$description,$amount){
		$this->id=$id;
		$this->bill_id=$bill_id;
		$this->description=$description;
		$this->amount=$amount;

	}
	public function save(){
		global $db,$tx;
		$db->query("insert into {$tx}react_bill_details(bill_id,description,amount)values('$this->bill_id','$this->description','$this->amount')");
		return $db->insert_id;
	}
	public function update(){
		global $db,$tx;
		$db->query("update {$tx}react_bill_details set bill_id='$this->bill_id',description='$this->description',amount='$this->amount' where id='$this->id'");
	}
	public static function delete($id){
		global $db,$tx;
		$db->query("delete from {$tx}react_bill_details where id={$id}");
	}
	public function jsonSerialize(){
		return get_object_vars($this);
	}
	public static function all(){
		global $db,$tx;
		$result=$db->query("select id,bill_id,description,amount from {$tx}react_bill_details");
		$data=[];
		while($reactbilldetail=$result->fetch_object()){
			$data[]=$reactbilldetail;
		}
			return $data;
	}
	public static function pagination($page=1,$perpage=10,$criteria=""){
		global $db,$tx;
		$top=($page-1)*$perpage;
		$result=$db->query("select id,bill_id,description,amount from {$tx}react_bill_details $criteria limit $top,$perpage");
		$data=[];
		while($reactbilldetail=$result->fetch_object()){
			$data[]=$reactbilldetail;
		}
			return $data;
	}
	public static function count($criteria=""){
		global $db,$tx;
		$result =$db->query("select count(*) from {$tx}react_bill_details $criteria");
		list($count)=$result->fetch_row();
			return $count;
	}
	public static function find($id){
		global $db,$tx;
		$result =$db->query("select id,bill_id,description,amount from {$tx}react_bill_details where id='$id'");
		$reactbilldetail=$result->fetch_object();
			return $reactbilldetail;
	}
	static function get_last_id(){
		global $db,$tx;
		$result =$db->query("select max(id) last_id from {$tx}react_bill_details");
		$reactbilldetail =$result->fetch_object();
		return $reactbilldetail->last_id;
	}
	public function json(){
		return json_encode($this);
	}
	public function __toString(){
		return "		Id:$this->id<br> 
		Bill Id:$this->bill_id<br> 
		Description:$this->description<br> 
		Amount:$this->amount<br> 
";
	}

	//-------------HTML----------//

	static function html_select($name="cmbReactBillDetail"){
		global $db,$tx;
		$html="<select id='$name' name='$name'> ";
		$result =$db->query("select id,name from {$tx}react_bill_details");
		while($reactbilldetail=$result->fetch_object()){
			$html.="<option value ='$reactbilldetail->id'>$reactbilldetail->name</option>";
		}
		$html.="</select>";
		return $html;
	}
	static function html_table($page = 1,$perpage = 10,$criteria="",$action=true){
		global $db,$tx,$base_url;
		$count_result =$db->query("select count(*) total from {$tx}react_bill_details $criteria ");
		list($total_rows)=$count_result->fetch_row();
		$total_pages = ceil($total_rows /$perpage);
		$top = ($page - 1)*$perpage;
		$result=$db->query("select id,bill_id,description,amount from {$tx}react_bill_details $criteria limit $top,$perpage");
		$html="<table class='table'>";
			$html.="<tr><th colspan='3'>".Html::link(["class"=>"btn btn-success","route"=>"reactbilldetail/create","text"=>"New ReactBillDetail"])."</th></tr>";
		if($action){
			$html.="<tr><th>Id</th><th>Bill Id</th><th>Description</th><th>Amount</th><th>Action</th></tr>";
		}else{
			$html.="<tr><th>Id</th><th>Bill Id</th><th>Description</th><th>Amount</th></tr>";
		}
		while($reactbilldetail=$result->fetch_object()){
			$action_buttons = "";
			if($action){
				$action_buttons = "<td><div class='btn-group' style='display:flex;'>";
				$action_buttons.= Event::button(["name"=>"show", "value"=>"Show", "class"=>"btn btn-info", "route"=>"reactbilldetail/show/$reactbilldetail->id"]);
				$action_buttons.= Event::button(["name"=>"edit", "value"=>"Edit", "class"=>"btn btn-primary", "route"=>"reactbilldetail/edit/$reactbilldetail->id"]);
				$action_buttons.= Event::button(["name"=>"delete", "value"=>"Delete", "class"=>"btn btn-danger", "route"=>"reactbilldetail/confirm/$reactbilldetail->id"]);
				$action_buttons.= "</div></td>";
			}
			$html.="<tr><td>$reactbilldetail->id</td><td>$reactbilldetail->bill_id</td><td>$reactbilldetail->description</td><td>$reactbilldetail->amount</td> $action_buttons</tr>";
		}
		$html.="</table>";
		$html.= pagination($page,$total_pages);
		return $html;
	}
	static function html_row_details($id){
		global $db,$tx,$base_url;
		$result =$db->query("select id,bill_id,description,amount from {$tx}react_bill_details where id={$id}");
		$reactbilldetail=$result->fetch_object();
		$html="<table class='table'>";
		$html.="<tr><th colspan=\"2\">ReactBillDetail Show</th></tr>";
		$html.="<tr><th>Id</th><td>$reactbilldetail->id</td></tr>";
		$html.="<tr><th>Bill Id</th><td>$reactbilldetail->bill_id</td></tr>";
		$html.="<tr><th>Description</th><td>$reactbilldetail->description</td></tr>";
		$html.="<tr><th>Amount</th><td>$reactbilldetail->amount</td></tr>";

		$html.="</table>";
		return $html;
	}
}
?>
