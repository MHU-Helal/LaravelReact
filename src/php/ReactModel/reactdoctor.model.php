<?php
class ReactDoctor extends Model implements JsonSerializable{
	public $id;
	public $name;
	public $specialty;
	public $phone;
	public $email;

	public function __construct(){
	}
	public function set($id,$name,$specialty,$phone,$email){
		$this->id=$id;
		$this->name=$name;
		$this->specialty=$specialty;
		$this->phone=$phone;
		$this->email=$email;

	}
	public function save(){
		global $db,$tx;
		$db->query("insert into {$tx}react_doctors(name,specialty,phone,email)values('$this->name','$this->specialty','$this->phone','$this->email')");
		return $db->insert_id;
	}
	public function update(){
		global $db,$tx;
		$db->query("update {$tx}react_doctors set name='$this->name',specialty='$this->specialty',phone='$this->phone',email='$this->email' where id='$this->id'");
	}
	public static function delete($id){
		global $db,$tx;
		$db->query("delete from {$tx}react_doctors where id={$id}");
	}
	public function jsonSerialize(){
		return get_object_vars($this);
	}
	public static function all(){
		global $db,$tx;
		$result=$db->query("select id,name,specialty,phone,email from {$tx}react_doctors");
		$data=[];
		while($reactdoctor=$result->fetch_object()){
			$data[]=$reactdoctor;
		}
			return $data;
	}
	public static function pagination($page=1,$perpage=10,$criteria=""){
		global $db,$tx;
		$top=($page-1)*$perpage;
		$result=$db->query("select id,name,specialty,phone,email from {$tx}react_doctors $criteria limit $top,$perpage");
		$data=[];
		while($reactdoctor=$result->fetch_object()){
			$data[]=$reactdoctor;
		}
			return $data;
	}
	public static function count($criteria=""){
		global $db,$tx;
		$result =$db->query("select count(*) from {$tx}react_doctors $criteria");
		list($count)=$result->fetch_row();
			return $count;
	}
	public static function find($id){
		global $db,$tx;
		$result =$db->query("select id,name,specialty,phone,email from {$tx}react_doctors where id='$id'");
		$reactdoctor=$result->fetch_object();
			return $reactdoctor;
	}
	static function get_last_id(){
		global $db,$tx;
		$result =$db->query("select max(id) last_id from {$tx}react_doctors");
		$reactdoctor =$result->fetch_object();
		return $reactdoctor->last_id;
	}
	public function json(){
		return json_encode($this);
	}
	public function __toString(){
		return "		Id:$this->id<br> 
		Name:$this->name<br> 
		Specialty:$this->specialty<br> 
		Phone:$this->phone<br> 
		Email:$this->email<br> 
";
	}

	//-------------HTML----------//

	static function html_select($name="cmbReactDoctor"){
		global $db,$tx;
		$html="<select id='$name' name='$name'> ";
		$result =$db->query("select id,name from {$tx}react_doctors");
		while($reactdoctor=$result->fetch_object()){
			$html.="<option value ='$reactdoctor->id'>$reactdoctor->name</option>";
		}
		$html.="</select>";
		return $html;
	}
	static function html_table($page = 1,$perpage = 10,$criteria="",$action=true){
		global $db,$tx,$base_url;
		$count_result =$db->query("select count(*) total from {$tx}react_doctors $criteria ");
		list($total_rows)=$count_result->fetch_row();
		$total_pages = ceil($total_rows /$perpage);
		$top = ($page - 1)*$perpage;
		$result=$db->query("select id,name,specialty,phone,email from {$tx}react_doctors $criteria limit $top,$perpage");
		$html="<table class='table'>";
			$html.="<tr><th colspan='3'>".Html::link(["class"=>"btn btn-success","route"=>"reactdoctor/create","text"=>"New ReactDoctor"])."</th></tr>";
		if($action){
			$html.="<tr><th>Id</th><th>Name</th><th>Specialty</th><th>Phone</th><th>Email</th><th>Action</th></tr>";
		}else{
			$html.="<tr><th>Id</th><th>Name</th><th>Specialty</th><th>Phone</th><th>Email</th></tr>";
		}
		while($reactdoctor=$result->fetch_object()){
			$action_buttons = "";
			if($action){
				$action_buttons = "<td><div class='btn-group' style='display:flex;'>";
				$action_buttons.= Event::button(["name"=>"show", "value"=>"Show", "class"=>"btn btn-info", "route"=>"reactdoctor/show/$reactdoctor->id"]);
				$action_buttons.= Event::button(["name"=>"edit", "value"=>"Edit", "class"=>"btn btn-primary", "route"=>"reactdoctor/edit/$reactdoctor->id"]);
				$action_buttons.= Event::button(["name"=>"delete", "value"=>"Delete", "class"=>"btn btn-danger", "route"=>"reactdoctor/confirm/$reactdoctor->id"]);
				$action_buttons.= "</div></td>";
			}
			$html.="<tr><td>$reactdoctor->id</td><td>$reactdoctor->name</td><td>$reactdoctor->specialty</td><td>$reactdoctor->phone</td><td>$reactdoctor->email</td> $action_buttons</tr>";
		}
		$html.="</table>";
		$html.= pagination($page,$total_pages);
		return $html;
	}
	static function html_row_details($id){
		global $db,$tx,$base_url;
		$result =$db->query("select id,name,specialty,phone,email from {$tx}react_doctors where id={$id}");
		$reactdoctor=$result->fetch_object();
		$html="<table class='table'>";
		$html.="<tr><th colspan=\"2\">ReactDoctor Show</th></tr>";
		$html.="<tr><th>Id</th><td>$reactdoctor->id</td></tr>";
		$html.="<tr><th>Name</th><td>$reactdoctor->name</td></tr>";
		$html.="<tr><th>Specialty</th><td>$reactdoctor->specialty</td></tr>";
		$html.="<tr><th>Phone</th><td>$reactdoctor->phone</td></tr>";
		$html.="<tr><th>Email</th><td>$reactdoctor->email</td></tr>";

		$html.="</table>";
		return $html;
	}
}
?>
