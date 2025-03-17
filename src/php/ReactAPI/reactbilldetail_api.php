<?php
class ReactBillDetailApi{
	public function __construct(){
	}
	function index(){
		echo json_encode(["react_bill_details"=>ReactBillDetail::all()]);
	}
	function pagination($data){
		$page=$data["page"];
		$perpage=$data["perpage"];
		echo json_encode(["react_bill_details"=>ReactBillDetail::pagination($page,$perpage),"total_records"=>ReactBillDetail::count()]);
	}
	function find($data){
		echo json_encode(["reactbilldetail"=>ReactBillDetail::find($data["id"])]);
	}
	function delete($data){
		ReactBillDetail::delete($data["id"]);
		echo json_encode(["success" => "yes"]);
	}
	function save($data,$file=[]){
		$reactbilldetail=new ReactBillDetail();
		$reactbilldetail->bill_id=$data["bill_id"];
		$reactbilldetail->description=$data["description"];

		$reactbilldetail->save();
		echo json_encode(["success" => "yes"]);
	}
	function update($data,$file=[]){
		$reactbilldetail=new ReactBillDetail();
		$reactbilldetail->id=$data["id"];
		$reactbilldetail->bill_id=$data["bill_id"];
		$reactbilldetail->description=$data["description"];

		$reactbilldetail->update();
		echo json_encode(["success" => "yes"]);
	}
}
?>
