import modalHtml from './render-modal.html?raw'
import './render-modal.css'

let modal;
let form;


export const showModal = () =>{
    modal?.classList.remove('hide-modal')
}

export const hideModal = () =>{
    modal?.classList.add('hide-modal')
    form?.reset()
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) =>{
    if(modal) return;

    modal = document.createElement('div')

    modal.innerHTML = modalHtml

    modal.className = 'modal-container hide-modal'

    form = modal.querySelector('form')

    modal.addEventListener('click', (e)=>{
        if(e.target.className !== 'modal-container') return;
        hideModal()
    })

    form.addEventListener('submit', async(e)=>{
        e.preventDefault()

        const formData = new FormData( form );
        if(!formData.get('isActive')){
            formData.append('isActive', 'off')
        }
        const userLike = {}
        for (const [key, value] of formData) {
            if(key === 'balance'){
                userLike[key] = +value
                continue;
            }

            if( key === 'isActive'){
                userLike[key] = (value === 'on')?true : false
                continue;
            }

              userLike[key] = value
            
        }
        console.log(userLike);
        await callback(userLike)

        hideModal()
    })

    element.append(modal)

}

