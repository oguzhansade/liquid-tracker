import React from 'react'
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

function AddTracker(props) {

 
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  
// const data = useContext (ThemeContext)
  return (
    <div>   
        <div className='addTracker  col-12 py-4 d-flex'>
            <div className='topTracker'>
                <FontAwesomeIcon onClick={toggleDrawer}  icon={faCirclePlus} />
            </div>
            <div className='botTracker row'>
                Add Tracker
            </div>
        </div>

        <div className='refreshRate'>
          Zamanlar


        <Select
              onChange={props.handleRefreshRate}
              options={props.times}
                    />
        <button onClick={props.saveRefreshHandle}>Yenile</button>
        </div>
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
             <div className='p-3 d-flex drawer'>
               <h3 >Add Tracker</h3>
                <div className='drawer-top mt-3 col-12'>                  
                  <Select                         
                        onChange={props.handleSelectedOption}
                        options={props.selection}
                    />
                </div>

                <div className='drawer-top mt-3 col-12'>
                  Select District
                  <Select                         
                        onChange={props.handleSelectedOptionD}                        
                        options={props.district}
                    />
                </div>

                <div className='drawer-bot d-flex justify-content-center mt-5'>
                  <button onClick={props.addTracker}  className='saveTracker px-5'>
                    Save Tracker
                    </button>
                </div>
             </div>
             
            </Drawer>
        
    </div>
  )
}

export default AddTracker