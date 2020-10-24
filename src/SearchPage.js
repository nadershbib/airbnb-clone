import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage() {


    return (
        <div className='searchPage'>
          <div className="searchPage__info">
               <p>62 stays . 24 octobre to 30 octobre . 2 guest</p>
               <h1>Stays nearby</h1>

              <Button variant='outlined'>Cancellation Flexibility</Button>
              <Button variant='outlined'>Type of place</Button>
              <Button variant='outlined'>Price</Button>
              <Button variant='outlined'>Rooms and beds</Button>
              <Button variant='outlined'>More filters</Button>

          </div>

          <SearchResult 
          img='https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          location='Private room in center of London'

          title='Stay at this spacious Edwardian House'

          description='1 guest . 1 bedroom . 1.5 shared bthrooms Wifi . Kitchen . Free Parking . Washing Machine'
          
          star={4.73}

          price='$30 / night'
          total='$117 total'
           />
          <SearchResult 
          img='https://images.pexels.com/photos/4078617/pexels-photo-4078617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          location='Private apartment in East of London'

          title='Stay at this fabolous appartment'

          description='3 guest . 3 bedrooms . 2 shared bthrooms Wifi . Kitchen . Free Parking . Washing Machine'
          
          star={4.73}

          price='$30 / night'
          total='$117 total'
           />
          <SearchResult 
          img='https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          location='Private room in North of London'

          title='Stay at this spacious great House'

          description='3 guest . 1 bedroom . 1.5 shared bthrooms Wifi . Kitchen . Free Parking . Washing Machine'
          
          star={4.73}

          price='$30 / night'
          total='$200 total'
           />
          <SearchResult 
          img='https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          location='Awesome House in London'

          title='Stay at this spacious awesome House'

          description='3 guest . 4 bedrooms . 1.5 shared bthrooms Wifi . Kitchen . Free Parking . Washing Machine'
          
          star={4.73}

          price='$400 / night'
          total='$1800 total'
           />
            
        </div>
    )
}

export default SearchPage
