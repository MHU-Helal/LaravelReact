<?php
class ReactServiceApi{
	public function __construct(){
	}
	function index(){
		echo json_encode(["react_services"=>ReactService::all()]);
	}
	function pagination($data){
		$page=$data["page"];
		$perpage=$data["perpage"];
		echo json_encode(["react_services"=>ReactService::pagination($page,$perpage),"total_records"=>ReactService::count()]);
	}
	function find($data){
		echo json_encode(["reactservice"=>ReactService::find($data["id"])]);
	}
	function delete($data){
		ReactService::delete($data["id"]);
		echo json_encode(["success" => "yes"]);
	}
	function save($data,$file=[]){
		$reactservice=new ReactService();
		$reactservice->service_name=$data["service_name"];
		$reactservice->service_description=$data["service_description"];

		$reactservice->save();
		echo json_encode(["success" => "yes"]);
	}
	function update($data,$file=[]){
		$reactservice=new ReactService();
		$reactservice->id=$data["id"];
		$reactservice->service_name=$data["service_name"];
		$reactservice->service_description=$data["service_description"];

		$reactservice->update();
		echo json_encode(["success" => "yes"]);
	}
}
?>
