import React from 'react'

const Cards = () => {
    const imagen = 'https://picsum.photos/id/237/300/200';

    return (
        <div>
            <div className="card mx-1 my-2">
                <img src={imagen} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-center">Card Title</h5>
                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sapiente repellendus! Sequi aperiam neque, cupiditate debitis quam tenetur ea fugiat.</p>
                    <div className="d-flex justify-content-center">
                    <button className="btn btn-primary">Go somewhere</button>
                    </div>
                    
                </div>

            </div>




        </div>
    )
}

export default Cards
