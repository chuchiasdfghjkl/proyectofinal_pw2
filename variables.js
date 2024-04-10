const handlerBarsContext = {
    "/index.html": {
        "productos":[
            {
                url: "https://picsum.photos/id/832/150/150",
                titulo:"John Doe",
                des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            },
            {
                url: "https://picsum.photos/id/823/150/150",
                titulo: "Jane Doe",
                des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            },
            {
                url: "https://picsum.photos/id/680/150/150",
                titulo:"Junior Doe",
                des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            }
        ]
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;