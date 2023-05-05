import React, { useContext } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import HeartIcon from '../../Images/HeartIcon.svg'
import { Image } from "react-bootstrap";
import CompositeSubCard from "../CompositeSubCard/CompositeSubCard";
import CompositeSubCard1 from "../CompositeSubCard/CompositeSubCard1";
import CompositeSubCard2 from "../CompositeSubCard/CompositeSubCard2";
import { AccountContext } from "../../App";

export default function AccountFavourite() {
    const { favourite: Favourite } = useContext(AccountContext)
    const [favourite, setFavourite] = Favourite

    const paths = [
        { name: 'Account' },
        { name: 'Favourite' },
    ];
    const favDic = {
        '1': <CompositeSubCard skip={true} />,
        '2': <CompositeSubCard1 skip={true} />,
        '3': <CompositeSubCard2 skip={true} />
    }
    return (
        <>
            <div id="compost-breadcrumbs">
                <Breadcrumbs paths={paths} />
            </div>
            <div style={{ padding: '100px' }}>
                <div>
                    <Image src={HeartIcon} />
                    <span className="my-text">Favourite</span>
                </div>
                <div style={{ padding: '22px 0' }}>
                    View all your favorited learning topics in one place here.
                </div>
                <div>
                    {favourite.map(fav => (
                        <React.Fragment key={fav}>
                            {favDic[fav]}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}