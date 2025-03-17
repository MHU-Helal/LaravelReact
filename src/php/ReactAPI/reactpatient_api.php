<?php
class ReactPatientApi{
	public function __construct(){
	}
	function index(){
		echo json_encode(["react_patients"=>ReactPatient::all()]);
	}
	function pagination($data){
		$page=$data["page"];
		$perpage=$data["perpage"];
		echo json_encode(["react_patients"=>ReactPatient::pagination($page,$perpage),"total_records"=>ReactPatient::count()]);
	}
	function find($data){
		echo json_encode(["reactpatient"=>ReactPatient::find($data["id"])]);
	}
	function delete($data){
		ReactPatient::delete($data["id"]);
		echo json_encode(["success" => "yes"]);
	}
	function save($data,$file=[]){
		$reactpatient=new ReactPatient();
		$reactpatient->name=$data["name"];
		$reactpatient->age=$data["age"];
		$reactpatient->gender=$data["gender"];
		$reactpatient->phone=$data["phone"];
		$reactpatient->email=$data["email"];

		$reactpatient->save();
		echo json_encode(["success" => "yes"]);
	}
	function update($data,$file=[]){
		$reactpatient=new ReactPatient();
		$reactpatient->id=$data["id"];
		$reactpatient->name=$data["name"];
		$reactpatient->age=$data["age"];
		$reactpatient->gender=$data["gender"];
		$reactpatient->phone=$data["phone"];
		$reactpatient->email=$data["email"];

		$reactpatient->update();
		echo json_encode(["success" => "yes"]);
	}
}
?>
