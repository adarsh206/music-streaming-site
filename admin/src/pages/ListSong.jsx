/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {

  const [data, setData] = useState([]);
  const fetchSongs = async () => {
    try {
      
     const response = await axios.get(`${url}/api/song/list`);

    if(response.data.success){
      setData(response.data.songs);
    }

    } catch (error) {
      toast.error("Error Occured");
    }

  }

  useEffect(() => {
    fetchSongs();
  }, []);


  return (
    <div>
      List of Songs
    </div>
  )
}

export default ListSong