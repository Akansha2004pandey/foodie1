const Contact =()=>{
    return (
        <div>
            <h1 className="font-bold text-lg m-4 p-4">Contact us</h1>
            <input type="text" name="name" text placeholder="enter name"className="outline-1 rounded-lg border-2  p-2 m-4" />
            <input type="email" name="email" text placeholder="enter email" className="outline-1 rounded-lg border-2 p-2 m-4"/>
            <button className="m-3 p-4 bg-orange-500 text-white font-bold rounded-lg">Submit</button>
        </div>
    )
}
export default Contact;