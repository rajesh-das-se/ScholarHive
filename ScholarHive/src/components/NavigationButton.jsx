import { useNavigate } from 'react-router-dom'

const NavigationButton = ({buttonText, destinationPage})=>{
    const navigate=useNavigate();
    
    const goToScholarships=()=>{
        return navigate(toString(destinationPage))
    }

    return (
        <>
            <button onClick={goToScholarships} className='bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700'>{buttonText}</button>
        </>
    )
}

export default NavigationButton;