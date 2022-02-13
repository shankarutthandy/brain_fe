const Rank=({user})=>{
    return (
        <div>
            <div className='white f3'>
                {user.name+',Your number of entries is ...'}
            </div>
            <div className='white f1'>
            {'#'+user.entries}
            </div>
        </div>
    )
}
export default Rank;