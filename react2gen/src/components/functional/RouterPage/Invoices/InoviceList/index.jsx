const InvoiceList =() =>{
    const arrayInvoices = [{id:1},{id:"sadasas"}]
    return <div>{arrayInvoices.map((item) =>{
        return <p>{item.id}</p>
    })}</div>
}
export default InvoiceList;