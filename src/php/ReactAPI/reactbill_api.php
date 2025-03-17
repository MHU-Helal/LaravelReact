<?php
class ReactBillApi{
	public function __construct(){
	}
	function index(){
		echo json_encode(["react_bills"=>ReactBill::all()]);
	}
	function pagination($data){
		$page=$data["page"];
		$perpage=$data["perpage"];
		echo json_encode(["react_bills"=>ReactBill::pagination($page,$perpage),"total_records"=>ReactBill::count()]);
	}
	function find($data){
		echo json_encode(["reactbill"=>ReactBill::find($data["id"])]);
	}
	function delete($data){
		ReactBill::delete($data["id"]);
		echo json_encode(["success" => "yes"]);
	}
	function save($data,$file=[]){
		$reactbill=new ReactBill();
		$reactbill->patient_id=$data["patient_id"];
		$reactbill->doctor_id=$data["doctor_id"];
		$reactbill->bill_date=$data["bill_date"];

		$bill_id= $reactbill->save();
		echo json_encode(["bill_id" => $bill_id]);
	}
	function update($data,$file=[]){
		$reactbill=new ReactBill();
		$reactbill->id=$data["id"];
		$reactbill->patient_id=$data["patient_id"];
		$reactbill->doctor_id=$data["doctor_id"];
		$reactbill->bill_date=$data["bill_date"];

		$reactbill->update();
		echo json_encode(["success" => "yes"]);
	}
}
?>
