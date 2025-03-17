<?php
class ReactBill extends Model implements JsonSerializable{
	public $id;
	public $patient_id;
	public $doctor_id;
	public $total_amount;
	public $bill_date;

	public function __construct(){
	}
	public function set($id,$patient_id,$doctor_id,$total_amount,$bill_date){
		$this->id=$id;
		$this->patient_id=$patient_id;
		$this->doctor_id=$doctor_id;
		$this->total_amount=$total_amount;
		$this->bill_date=$bill_date;

	}
	public function save(){
		global $db,$tx;
		$db->query("insert into {$tx}react_bills(patient_id,doctor_id,total_amount,bill_date)values('$this->patient_id','$this->doctor_id','$this->total_amount','$this->bill_date')");
		return $db->insert_id;
	}
	public function update(){
		global $db,$tx;
		$db->query("update {$tx}react_bills set patient_id='$this->patient_id',doctor_id='$this->doctor_id',total_amount='$this->total_amount',bill_date='$this->bill_date' where id='$this->id'");
	}
	public static function delete($id){
		global $db,$tx;
		$db->query("delete from {$tx}react_bills where id={$id}");
	}
	public function jsonSerialize(){
		return get_object_vars($this);
	}
	public static function all(){
		global $db,$tx;
		$result=$db->query("select id,patient_id,doctor_id,total_amount,bill_date from {$tx}react_bills");
		$data=[];
		while($reactbill=$result->fetch_object()){
			$data[]=$reactbill;
		}
			return $data;
	}
	public static function pagination($page=1,$perpage=10,$criteria=""){
		global $db,$tx;
		$top=($page-1)*$perpage;
		$result=$db->query("select id,patient_id,doctor_id,total_amount,bill_date from {$tx}react_bills $criteria limit $top,$perpage");
		$data=[];
		while($reactbill=$result->fetch_object()){
			$data[]=$reactbill;
		}
			return $data;
	}
	public static function count($criteria=""){
		global $db,$tx;
		$result =$db->query("select count(*) from {$tx}react_bills $criteria");
		list($count)=$result->fetch_row();
			return $count;
	}
	public static function find($id){
		global $db,$tx;
		$result =$db->query("select id,patient_id,doctor_id,total_amount,bill_date from {$tx}react_bills where id='$id'");
		$reactbill=$result->fetch_object();
			return $reactbill;
	}
	static function get_last_id(){
		global $db,$tx;
		$result =$db->query("select max(id) last_id from {$tx}react_bills");
		$reactbill =$result->fetch_object();
		return $reactbill->last_id;
	}
	public function json(){
		return json_encode($this);
	}
	public function __toString(){
		return "		Id:$this->id<br> 
		Patient Id:$this->patient_id<br> 
		Doctor Id:$this->doctor_id<br> 
		Total Amount:$this->total_amount<br> 
		Bill Date:$this->bill_date<br> 
";
	}

	//-------------HTML----------//

	static function html_select($name="cmbReactBill"){
		global $db,$tx;
		$html="<select id='$name' name='$name'> ";
		$result =$db->query("select id,name from {$tx}react_bills");
		while($reactbill=$result->fetch_object()){
			$html.="<option value ='$reactbill->id'>$reactbill->name</option>";
		}
		$html.="</select>";
		return $html;
	}
	static function html_table($page = 1,$perpage = 10,$criteria="",$action=true){
		global $db,$tx,$base_url;
		$count_result =$db->query("select count(*) total from {$tx}react_bills $criteria ");
		list($total_rows)=$count_result->fetch_row();
		$total_pages = ceil($total_rows /$perpage);
		$top = ($page - 1)*$perpage;
		$result=$db->query("select id,patient_id,doctor_id,total_amount,bill_date from {$tx}react_bills $criteria limit $top,$perpage");
		$html="<table class='table'>";
			$html.="<tr><th colspan='3'>".Html::link(["class"=>"btn btn-success","route"=>"reactbill/create","text"=>"New ReactBill"])."</th></tr>";
		if($action){
			$html.="<tr><th>Id</th><th>Patient Id</th><th>Doctor Id</th><th>Total Amount</th><th>Bill Date</th><th>Action</th></tr>";
		}else{
			$html.="<tr><th>Id</th><th>Patient Id</th><th>Doctor Id</th><th>Total Amount</th><th>Bill Date</th></tr>";
		}
		while($reactbill=$result->fetch_object()){
			$action_buttons = "";
			if($action){
				$action_buttons = "<td><div class='btn-group' style='display:flex;'>";
				$action_buttons.= Event::button(["name"=>"show", "value"=>"Show", "class"=>"btn btn-info", "route"=>"reactbill/show/$reactbill->id"]);
				$action_buttons.= Event::button(["name"=>"edit", "value"=>"Edit", "class"=>"btn btn-primary", "route"=>"reactbill/edit/$reactbill->id"]);
				$action_buttons.= Event::button(["name"=>"delete", "value"=>"Delete", "class"=>"btn btn-danger", "route"=>"reactbill/confirm/$reactbill->id"]);
				$action_buttons.= "</div></td>";
			}
			$html.="<tr><td>$reactbill->id</td><td>$reactbill->patient_id</td><td>$reactbill->doctor_id</td><td>$reactbill->total_amount</td><td>$reactbill->bill_date</td> $action_buttons</tr>";
		}
		$html.="</table>";
		$html.= pagination($page,$total_pages);
		return $html;
	}
	static function html_row_details($id){
		global $db,$tx,$base_url;
		$result =$db->query("select id,patient_id,doctor_id,total_amount,bill_date from {$tx}react_bills where id={$id}");
		$reactbill=$result->fetch_object();
		$html="<table class='table'>";
		$html.="<tr><th colspan=\"2\">ReactBill Show</th></tr>";
		$html.="<tr><th>Id</th><td>$reactbill->id</td></tr>";
		$html.="<tr><th>Patient Id</th><td>$reactbill->patient_id</td></tr>";
		$html.="<tr><th>Doctor Id</th><td>$reactbill->doctor_id</td></tr>";
		$html.="<tr><th>Total Amount</th><td>$reactbill->total_amount</td></tr>";
		$html.="<tr><th>Bill Date</th><td>$reactbill->bill_date</td></tr>";

		$html.="</table>";
		return $html;
	}
}
?>
