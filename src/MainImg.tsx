interface Props {
    imgSrc: string;
    alt: string;
}

function MainImg(props: Props){
    return (
        <img className={"mainImg"} src={props.imgSrc} alt={props.alt} />
    )
}

export default MainImg;