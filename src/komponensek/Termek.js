class Termek{

    constructor(){

        return (<div class="termek">
        <h2>{elem.cim}</h2>
        <Kep src={elem.src} key={index} index={index}/>
        <p>{elem.leiras}</p>
        <p>ár: {elem.ar}</p>
        <button index={index}>Kosárba</button>
        </div>)

    }

}
export default Termek;