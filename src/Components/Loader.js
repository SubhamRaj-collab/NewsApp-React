import load from '../spinner.gif'

const Loader = () => {
    return (
      <div className='text-center'>
        <img className='my-5' src={load} alt="loading.." />
      </div>
    )
}

export default Loader