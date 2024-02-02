
/**
 * 
 * @returns {Object}
 */
const fethcQuote = async () => {
    const url = 'https://api.breakingbadquotes.xyz/v1/quotes/'

    const res = await fetch(url)

    const data =  await res.json()

    return data[0]


}





/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
      
    

    const quoteLabel = document.createElement('blockquote')
    const authorLabel = document.createElement('h3')
    const nextQuoteButton = document.createElement('button')
    nextQuoteButton.innerText = 'Next Quote'

    nextQuoteButton.addEventListener('click', ()=>{
        element.innerHTML = 'Loading...'
        fethcQuote()
    .then( renderQuote)  
    } )

    const renderQuote = (data)=>{
        if(!data){
            nextQuoteButton.disabled=true
            return
        }
        nextQuoteButton.disabled=false
        quoteLabel.innerHTML = data.quote
        authorLabel.innerHTML = data.author
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton)
    }

    fethcQuote()
    .then( renderQuote)  
    

}