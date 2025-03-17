<?php
class ReactPatient extends Model implements JsonSerializable{
	public $id;
	public $name;
	public $age;
	public $gender;
	public $phone;
	public $email;

	public function __construct(){
	}
	public function set($id,$name,$age,$gender,$phone,$email){
		$this->id=$id;
		$this->name=$name;
		$this->age=$age;
		$this->gender=$gender;
		$this->phone=$phone;
		$this->email=$email;

	}
	public function save(){
		global $db,$tx;
		$db->query("insert into {$tx}react_patients(name,age,gender,phone,email)values('$this->name','$this->age','$this->gender','$this->phone','$this->email')");
		return $db->insert_id;
	}
	public function update(){
		global $db,$tx;
		$db->query("update {$tx}react_patients set name='$this->name',age='$this->age',gender='$this->gender',phone='$this->phone',email='$this->email' where id='$this->id'");
	}
	public static function delete($id){
		global $db,$tx;
		$db->query("delete from {$tx}react_patients where id={$id}");
	}
	public function jsonSerialize():mixed{
		return get_object_vars($this);
	}
	public static function all(){
		global $db,$tx;
		$result=$db->query("select id,name,age,gender,phone,email from {$tx}react_patients");
		$data=[];
		while($reactpatient=$result->fetch_object()){
			$data[]=$reactpatient;
		}
			return $data;
	}
	public static function pagination($page=1,$perpage=10,$criteria=""){
		global $db,$tx;
		$top=($page-1)*$perpage;
		$result=$db->query("select id,name,age,gender,phone,email from {$tx}react_patients $criteria limit $top,$perpage");
		$data=[];
		while($reactpatient=$result->fetch_object()){
			$data[]=$reactpatient;
		}
			return $data;
	}
	public static function count($criteria=""){
		global $db,$tx;
		$result =$db->query("select count(*) from {$tx}react_patients $criteria");
		list($count)=$result->fetch_row();
			return $count;
	}
	public static function find($id){
		global $db,$tx;
		$result =$db->query("select id,name,age,gender,phone,email from {$tx}react_patients where id='$id'");
		$reactpatient=$result->fetch_object();
			return $reactpatient;
	}
	static function get_last_id(){
		global $db,$tx;
		$result =$db->query("select max(id) last_id from {$tx}react_patients");
		$reactpatient =$result->fetch_object();
		return $reactpatient->last_id;
	}
	public function json(){
		return json_encode($this);
	}
	public function __toString(){
		return "		Id:$this->id<br> 
		Name:$this->name<br> 
		Age:$this->age<br> 
		Gender:$this->gender<br> 
		Phone:$this->phone<br> 
		Email:$this->email<br> 
";
	}

	//-------------HTML----------//

	static function html_select($name="cmbReactPatient"){
		global $db,$tx;
		$html="<select id='$name' name='$name'> ";
		$result =$db->query("select id,name from {$tx}react_patients");
		while($reactpatient=$result->fetch_object()){
			$html.="<option value ='$reactpatient->id'>$reactpatient->name</option>";
		}
		$html.="</select>";
		return $html;
	}
	static function html_table($page = 1,$perpage = 10,$criteria="",$action=true){
		global $db,$tx,$base_url;
		$count_result =$db->query("select count(*) total from {$tx}react_patients $criteria ");
		list($total_rows)=$count_result->fetch_row();
		$total_pages = ceil($total_rows /$perpage);
		$top = ($page - 1)*$perpage;
		$result=$db->query("select id,name,age,gender,phone,email from {$tx}react_patients $criteria limit $top,$perpage");
		$html="<table class='table'>";
			$html.="<tr><th colspan='3'>".Html::link(["class"=>"btn btn-success","route"=>"reactpatient/create","text"=>"New ReactPatient"])."</th></tr>";
		if($action){
			$html.="<tr><th>Id</th><th>Name</th><th>Age</th><th>Gender</th><th>Phone</th><th>Email</th><th>Action</th></tr>";
		}else{
			$html.="<tr><th>Id</th><th>Name</th><th>Age</th><th>Gender</th><th>Phone</th><th>Email</th></tr>";
		}
		while($reactpatient=$result->fetch_object()){
			$action_buttons = "";
			if($action){
				$action_buttons = "<td><div class='btn-group' style='display:flex;'>";
				$action_buttons.= Event::button(["name"=>"show", "value"=>"Show", "class"=>"btn btn-info", "route"=>"reactpatient/show/$reactpatient->id"]);
				$action_buttons.= Event::button(["name"=>"edit", "value"=>"Edit", "class"=>"btn btn-primary", "route"=>"reactpatient/edit/$reactpatient->id"]);
				$action_buttons.= Event::button(["name"=>"delete", "value"=>"Delete", "class"=>"btn btn-danger", "route"=>"reactpatient/confirm/$reactpatient->id"]);
				$action_buttons.= "</div></td>";
			}
			$html.="<tr><td>$reactpatient->id</td><td>$reactpatient->name</td><td>$reactpatient->age</td><td>$reactpatient->gender</td><td>$reactpatient->phone</td><td>$reactpatient->email</td> $action_buttons</tr>";
		}
		$html.="</table>";
		$html.= pagination($page,$total_pages);
		return $html;
	}
	static function html_row_details($id){
		global $db,$tx,$base_url;
		$result =$db->query("select id,name,age,gender,phone,email from {$tx}react_patients where id={$id}");
		$reactpatient=$result->fetch_object();
		$html="<table class='table'>";
		$html.="<tr><th colspan=\"2\">ReactPatient Show</th></tr>";
		$html.="<tr><th>Id</th><td>$reactpatient->id</td></tr>";
		$html.="<tr><th>Name</th><td>$reactpatient->name</td></tr>";
		$html.="<tr><th>Age</th><td>$reactpatient->age</td></tr>";
		$html.="<tr><th>Gender</th><td>$reactpatient->gender</td></tr>";
		$html.="<tr><th>Phone</th><td>$reactpatient->phone</td></tr>";
		$html.="<tr><th>Email</th><td>$reactpatient->email</td></tr>";

		$html.="</table>";
		return $html;
	}
}
?>
