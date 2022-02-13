import './ImageLinkForm.css'
const ImageLinkForm=({onInputChange,onSubmit})=>
{
    return (
        <div className='ma4 mt0'>
            <p className='f3'>
                {'this magic brain will detect faces'}
            </p>
            <div className='center'>
                <div className='form w-80 pa4 br3 shadow-5'>
                <input  className='f4 pa2 w-70 center' onChange={onInputChange} type='text'/>
                <button className='w-40 grow f4 link ph3 pv2 div white bg-light-purple' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
};
export default ImageLinkForm;