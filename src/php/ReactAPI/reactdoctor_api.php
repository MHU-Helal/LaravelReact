<?php
class ReactDoctorApi{
	public function __construct(){
	}
	function index(){
		echo json_encode(["react_doctors"=>ReactDoctor::all()]);
	}
	function pagination($data){
		$page=$data["page"];
		$perpage=$data["perpage"];
		echo json_encode(["react_doctors"=>ReactDoctor::pagination($page,$perpage),"total_records"=>ReactDoctor::count()]);
	}
	function find($data){
		echo json_encode(["reactdoctor"=>ReactDoctor::find($data["id"])]);
	}
	function delete($data){
		ReactDoctor::delete($data["id"]);
		echo json_encode(["success" => "yes"]);
	}
	function save($data,$file=[]){
		$reactdoctor=new ReactDoctor();
		$reactdoctor->name=$data["name"];
		$reactdoctor->specialty=$data["specialty"];
		$reactdoctor->phone=$data["phone"];
		$reactdoctor->email=$data["email"];

		$reactdoctor->save();
		echo json_encode(["success" => "yes"]);
	}
	function update($data,$file=[]){
		$reactdoctor=new ReactDoctor();
		$reactdoctor->id=$data["id"];
		$reactdoctor->name=$data["name"];
		$reactdoctor->specialty=$data["specialty"];
		$reactdoctor->phone=$data["phone"];
		$reactdoctor->email=$data["email"];

		$reactdoctor->update();
		echo json_encode(["success" => "yes"]);
	}
}
?>
