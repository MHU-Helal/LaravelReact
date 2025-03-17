import React, { useEffect, useState } from "react";

import axios from "axios";
import Cart from "../../cartComponent/Cart";
// import Cart from "./Cart";

const Invoice = () => {
  const baseUrl = "http://localhost/project/admin";
   
  // const cart= new Cart("purchase")
  const cart = Cart('purchase');

  const [suppliers, setSuppliers] = useState([])
  const [selectedSupplier, setselectedSupplier] = useState(null)
  const [warehouse, setWareHouse] = useState([])
  const [selectedwarehouse, setSelectedWareHouse] = useState(null)
  const [summaryCount, setSummaryCount] = useState({
       discount:0,
       tax:0,
       subtotal:0,
       total:0
  })

  const [purchaseProcess, setPurchaseProcess] = useState({
      supplier_id:0,
      warehouse_id:0,
      products:[],
      purchase_total:0,
      discount:0,
      vat:0
  })


  const [item, setItem] = useState({
    name:"",
    item_id:0,
    qty:1,
    price:0,
    discount: 0,
    total_discount:0,
    subtotal: 0
  })
  const [items, setItems] = useState([ cart.getCart() ])


  const handleSetItem = (e) => {
    const { name, value } = e.target
    if (name == "product") {
      let productData = JSON.parse(value)
      setItem((prev) => ({
        ...prev,
        name: productData.name,
        item_id: productData.id,
        qty: 1,
        price: productData.offer_price,
        subtotal:productData.offer_price
      }))
    }
    if (name == "qty") {
      setItem((prev) => ({
        ...prev,
        qty: value,
        subtotal: prev.price * value
      }))
    }

    if (name == "discount") {
      setItem((prev) => ({
        ...prev,
        discount: value,
        total_discount:(prev.qty * value),
        subtotal: (prev.price * prev.qty) - (prev.qty * value)
      }))
    }

    // setItem((prev) => ({
    //   ...prev,
    //   [name]:value, 
    // }))

  }

  // calculate summary

 

  const calcualtion = () => {
    
    const subtotal = items.reduce((sum, item) => (sum +  parseFloat(item.subtotal)), 0);
    const discount = items.reduce((sum, item) => (sum +  parseFloat(item.total_discount)), 0);
    const tax = subtotal * 0.15
    const total= subtotal+ tax;

    setSummaryCount({
      discount:discount,
      tax:tax,
      subtotal:subtotal,
      total:total
    })
   
};


useEffect(() => {
  calcualtion()
}, [items])


  const handleSetAllItems = (e) => {
   // console.log(item);
    
    cart.save(item)
    setItems(cart.getCart())
    setItem({
      name: "",
      item_id:0,
      qty:1,
      price: 0,
      discount: 0,
      subtotal: 0,
      total_discount:0
    })
  }

  // delete item 
  const handleitemdelete=(id)=>{
     cart.deleteItem(id)
     setItems(cart.getCart())
  }
  const handleDeleteAllItems=()=>{
     cart.clearCart()
     setItems(cart.getCart())
  }

  const [products, setProducts] = useState([])

  const handleSelectedSupplier = (e) => {
    const { value } = e.target
    setselectedSupplier(JSON.parse(value))
  }
  const handleSelectedwarehouse = (e) => {
    const { value } = e.target
    setSelectedWareHouse(JSON.parse(value))
  }

 // console.log(selectedSupplier);

  const fetchSuppliers = () => {
    axios.get(baseUrl + "/api/Supplier/")
      .then(res => {
        // console.log(res);
        setSuppliers(res.data.suppliers)
      })
  }
  const fetchWareHouse = () => {
    axios.get(baseUrl + "/api/warehouse/")
      .then(res => {
        //console.log(res);
        setWareHouse(res.data.warehouses)
      })
  }
  const fetchProducts = () => {
    axios.get(baseUrl + "/api/product/")
      .then(res => {
        //console.log(res);
        setProducts(res.data.products)
      })
  }

  useEffect(() => {
    fetchSuppliers()
    fetchWareHouse()
    fetchProducts()
    setItems(cart.getCart())

  }, [])

  const handleProcess=()=>{
    setPurchaseProcess({
      supplier_id:selectedSupplier.id,
      warehouse_id:selectedwarehouse.id,
      products:items,
      purchase_total:summaryCount.total,
      discount:summaryCount.discount,
      vat:summaryCount.tax

    })

    axios.post(baseUrl+"/api/Process/saveReact",purchaseProcess)
    .then(res=>{
      console.log(res);
      cart.clearCart()
      setItems(cart.getCart())
      setSelectedWareHouse(null)
      setselectedSupplier(null)
    })
    .catch(err=>{
        console.log(err);
        
    })

  }



  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h1 className="mb-0">Invoice</h1>
        </div>
        <div className="card-body">
          {/* Invoice Details */}
          <div className="row mb-4">


            <div className="col-md-4">
              <h5>Supplier</h5>
              <select onChange={handleSelectedSupplier} className="form-select mb-2" name="supplier">
                <option>Select Supplier</option>

                {suppliers?.map((data, i) => (
                  <>
                    <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                  </>
                ))}


              </select>
              <p className="mb-1">Phone: {selectedSupplier && selectedSupplier.mobile} <span id="phone">-</span></p>
              <p>Email:  {selectedSupplier && selectedSupplier.email} <span id="email">-</span></p>
            </div>
            <div className="col-md-4">
              <h5>Warehouse</h5>
              <select onChange={handleSelectedwarehouse} className="form-select">
                <option>Select Warehouse</option>
                {warehouse?.map((data, i) => (
                  <>
                    <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                  </>
                ))}
              </select>
              <p className="mb-1">Phone: {selectedwarehouse && selectedwarehouse.contact} <span id="phone">-</span></p>
              <p>City:  {selectedwarehouse && selectedwarehouse.city} <span id="email">-</span></p>
            </div>
            <div className="col-md-4">
              <h5>Invoice Details</h5>
              <p>Invoice No: <strong>#12345</strong></p>
              <p>Date: <strong>{new Date().toLocaleDateString()}</strong></p>
              <div>
                Delivery Date:
                <input type="date" className="form-control mt-1" />
              </div>
            </div>
          </div>

          {/* Product Table */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Discount</th>
                <th>Total</th>
                <th><button onClick={handleDeleteAllItems} className="btn btn-warning">DeleteAll</button></th>
              </tr>
              <tr>
                <td>
                  <select name='product' onChange={handleSetItem} className="form-select">
                    <option>Select Product</option>
                    {products?.map((data, i) => (
                      <>
                        <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                      </>
                    ))}
                  </select>
                </td>
                <td><input value={item.qty} name="qty" onChange={handleSetItem} type="text" className=" p-1  w-100" placeholder="Qty" /></td>
                <td><input value={item.price} name="price" type="text" className="w-100" placeholder="Price" /></td>
                <td><input value={item.discount} name="discount" onChange={handleSetItem} type="text" className="w-100" placeholder="Discount" /></td>
                <td>{item.subtotal}</td>
                <td>
                  <button onClick={handleSetAllItems} className="btn btn-info">Add</button>
                </td>
              </tr>
            </thead>
            <tbody id="data_append">
              {
                items?.map((data, i) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.qty}</td>
                    <td>{data.price}</td>
                    <td>{data.discount}</td>
                    <td>{data.subtotal}</td>
                    <td> <button onClick={()=>handleitemdelete(data.item_id)} className="btn btn-danger">-</button></td>
                  </tr>
                ))

              }
            </tbody>
            <tfoot>




              <tr>
                <td colSpan="4" className="text-end">Discount</td>
                <td>${summaryCount.discount}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Tax</td>
                <td>${summaryCount.tax}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Subtotal</td>
                <td>${summaryCount.subtotal}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end fw-bold">Total</td>
                <td className="fw-bold">${summaryCount.total}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          {/* Footer Actions */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger">Clear All</button>
            <button onClick={handleProcess} className="btn btn-success">Process</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
