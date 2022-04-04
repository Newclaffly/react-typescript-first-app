import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { JonalProps } from '../../interface/JonalProps'
import Itemjonalist from './Itemjonalist'
// import ItemJonal from './ItemJonal'
// interface Jonal {
//     id: string
//     title: string
//     url_image?: string
// }

// interface IJonalProps {
//     invoiceData: {
//         id: string
//         title: string
//         url_image?: string
//     }[]
// }

// interface IInvoiceListProps {
//     invoiceData: {
//         customername: string
//         invoices: { id: number; name: string; total: string; }[]
//     }
//}

// interface jonalData {

//         id: string
//         title: string
//         url_image: string

// }

// const itemsJonal = () => {
//     // const { id, title, url_image } = props.jonalData
//     return (
//         <div>
//             <h1>Someting</h1>
//         </div>
//         // <div>
//         //     <div className="list-jonal-item" key={id}>
//         //         <h3>{id}:{title}</h3>
//         //         <img src={url_image} alt={title} />
//         //     </div>
//         // </div>
//     )

// }



// const ItemList_local = (props: Jonal) => {
//     const id = props.id
//     const title = props.title
//     const url_image = props.url_image

//     return (
//         <div>
//             <div className="list-jonal-item" key={id}>
//                 <h3>{id}:{title}</h3>
//                 <img src={url_image} alt={title} />
//             </div>
//         </div>
//     )
// }

// const JonalList = (props: IJonalProps) => {
//     const { id, title, url_image } = props.invoiceData
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }



function Listjonal() {

    const [jonalList, setjonalList] = useState<JonalProps[]>([])

    useEffect(() => {
        axios.get("http://localhost:3000/getallJonal").then((response) => {
            setjonalList(response.data)
            console.log(response.data)
        }).catch((err) => {

        });

    }, [])

    return (
        <>
            <div className="list-jonal">
                {jonalList.map((val, index) => (
                    <Itemjonalist id={val.id} title={val.title} url_image={val.url_image} />
                ))}
            </div>
        </>

    )
}

export default Listjonal