import MediaItem from '../components/MediaItem';
import MyComponent from '../components/MyComponent';
import SingleView from '../components/SingleView';
import { useState } from 'react';
import { useMedia } from '../hooks/apiHooks';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);


  const { mediaArray } = useMedia();






























  return (
    <></>