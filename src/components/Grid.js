import '../App.css';
import GridItem from './GridItem';

const Grid = props => {
    return (
        <div className='container'>
            <div className="gridDiv">
                {
                    props.datas.map(data => (
                        <GridItem code={data.code} desc={data.desc} discount={data.discount}
                            img={data.img} logo={data.logo} />
                    ))
                }

            </div>

        </div>
    )
}

export default Grid;
