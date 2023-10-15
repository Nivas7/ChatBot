const quote = async () => {

    const response = await fetch("https://api.quotable.io/random?limit=1");
    const data = await response.json();
    const quote = data.content;
    const cite= data.author;
    return ( 
        <div className="p-[2rem]">
            <p className="p-[3px]">{quote}</p>
            <p className="text-gray-950 text-end">-{cite}</p>
        </div>
     );
}
 
export default quote;