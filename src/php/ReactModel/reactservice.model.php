<?php
class ReactService extends Model implements JsonSerializable{
	public $id;
	public $service_name;
	public $service_description;
	public $cost;

	public function __construct(){
	}
	public function set($id,$service_name,$service_description,$cost){
		$this->id=$id;
		$this->service_name=$service_name;
		$this->service_description=$service_description;
		$this->cost=$cost;

	}
	public function save(){
		global $db,$tx;
		$db->query("insert into {$tx}react_services(service_name,service_description,cost)values('$this->service_name','$this->service_description','$this->cost')");
		return $db->insert_id;
	}
	public function update(){
		global $db,$tx;
		$db->query("update {$tx}react_services set service_name='$this->service_name',service_description='$this->service_description',cost='$this->cost' where id='$this->id'");
	}
	public static function delete($id){
		global $db,$tx;
		$db->query("delete from {$tx}react_services where id={$id}");
	}
	public function jsonSerialize(){
		return get_object_vars($this);
	}
	public static function all(){
		global $db,$tx;
		$result=$db->query("select id,service_name,service_description,cost from {$tx}react_services");
		$data=[];
		while($reactservice=$result->fetch_object()){
			$data[]=$reactservice;
		}
			return $data;
	}
	public static function pagination($page=1,$perpage=10,$criteria=""){
		global $db,$tx;
		$top=($page-1)*$perpage;
		$result=$db->query("select id,service_name,service_description,cost from {$tx}react_services $criteria limit $top,$perpage");
		$data=[];
		while($reactservice=$result->fetch_object()){
			$data[]=$reactservice;
		}
			return $data;
	}
	public static function count($criteria=""){
		global $db,$tx;
		$result =$db->query("select count(*) from {$tx}react_services $criteria");
		list($count)=$result->fetch_row();
			return $count;
	}
	public static function find($id){
		global $db,$tx;
		$result =$db->query("select id,service_name,service_description,cost from {$tx}react_services where id='$id'");
		$reactservice=$result->fetch_object();
			return $reactservice;
	}
	static function get_last_id(){
		global $db,$tx;
		$result =$db->query("select max(id) last_id from {$tx}react_services");
		$reactservice =$result->fetch_object();
		return $reactservice->last_id;
	}
	public function json(){
		return json_encode($this);
	}
	public function __toString(){
		return "		Id:$this->id<br> 
		Service Name:$this->service_name<br> 
		Service Description:$this->service_description<br> 
		Cost:$this->cost<br> 
";
	}

	//-------------HTML----------//

	static function html_select($name="cmbReactService"){
		global $db,$tx;
		$html="<select id='$name' name='$name'> ";
		$result =$db->query("select id,name from {$tx}react_services");
		while($reactservice=$result->fetch_object()){
			$html.="<option value ='$reactservice->id'>$reactservice->name</option>";
		}
		$html.="</select>";
		return $html;
	}
	static function html_table($page = 1,$perpage = 10,$criteria="",$action=true){
		global $db,$tx,$base_url;
		$count_result =$db->query("select count(*) total from {$tx}react_services $criteria ");
		list($total_rows)=$count_result->fetch_row();
		$total_pages = ceil($total_rows /$perpage);
		$top = ($page - 1)*$perpage;
		$result=$db->query("select id,service_name,service_description,cost from {$tx}react_services $criteria limit $top,$perpage");
		$html="<table class='table'>";
			$html.="<tr><th colspan='3'>".Html::link(["class"=>"btn btn-success","route"=>"reactservice/create","text"=>"New ReactService"])."</th></tr>";
		if($action){
			$html.="<tr><th>Id</th><th>Service Name</th><th>Service Description</th><th>Cost</th><th>Action</th></tr>";
		}else{
			$html.="<tr><th>Id</th><th>Service Name</th><th>Service Description</th><th>Cost</th></tr>";
		}
		while($reactservice=$result->fetch_object()){
			$action_buttons = "";
			if($action){
				$action_buttons = "<td><div class='btn-group' style='display:flex;'>";
				$action_buttons.= Event::button(["name"=>"show", "value"=>"Show", "class"=>"btn btn-info", "route"=>"reactservice/show/$reactservice->id"]);
				$action_buttons.= Event::button(["name"=>"edit", "value"=>"Edit", "class"=>"btn btn-primary", "route"=>"reactservice/edit/$reactservice->id"]);
				$action_buttons.= Event::button(["name"=>"delete", "value"=>"Delete", "class"=>"btn btn-danger", "route"=>"reactservice/confirm/$reactservice->id"]);
				$action_buttons.= "</div></td>";
			}
			$html.="<tr><td>$reactservice->id</td><td>$reactservice->service_name</td><td>$reactservice->service_description</td><td>$reactservice->cost</td> $action_buttons</tr>";
		}
		$html.="</table>";
		$html.= pagination($page,$total_pages);
		return $html;
	}
	static function html_row_details($id){
		global $db,$tx,$base_url;
		$result =$db->query("select id,service_name,service_description,cost from {$tx}react_services where id={$id}");
		$reactservice=$result->fetch_object();
		$html="<table class='table'>";
		$html.="<tr><th colspan=\"2\">ReactService Show</th></tr>";
		$html.="<tr><th>Id</th><td>$reactservice->id</td></tr>";
		$html.="<tr><th>Service Name</th><td>$reactservice->service_name</td></tr>";
		$html.="<tr><th>Service Description</th><td>$reactservice->service_description</td></tr>";
		$html.="<tr><th>Cost</th><td>$reactservice->cost</td></tr>";

		$html.="</table>";
		return $html;
	}
}
?>
