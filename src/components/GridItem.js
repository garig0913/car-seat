import '../App.css';


const GridItem = props => {
    return (
        <div className='GridItemCont'>
            <img className='adImg' src={props.img} />
            <div className='gridItemFlex'>
                <i className='icon'>{props.logo}</i>
                <h3 className='desc'>{props.desc}</h3>
            </div>
            <div className='code'>
                <p className='coupon'>coupon code <span className='codeSpan'>{props.code}</span></p>
                <h1 className='discountPercent'>{props.discount}</h1>
            </div>
        </div>
    )
}

export default GridItem;
