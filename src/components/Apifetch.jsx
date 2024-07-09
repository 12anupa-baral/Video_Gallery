import { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
                setError('Error fetching videos');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='flex flex-col gap-11 p-20' >
            {Array.isArray(data) && data.map((item) => (
                <div key={item.id} className='flex '>
                    <div className="w-[100%]">
                        <a href={item.videoUrl} target='_blank'>
                            <img  className='rounded-md' src={item.thumbnailUrl} alt={item.title} width={400} />
                        </a>
                    </div>
                    
                    <div  className="w-[100%] border-2 p-9 rounded-md "> 
                    <a  className="flex flex-col gap-5" href={item.videoUrl} target='_blank'>
                      <div>  <h1 className='font-bold text-red-500'>{item.title}</h1></div>
                       <div> <h2>{item.description}</h2></div>
                       <div className='flex justify-between'>
                         <h2 className='font-bold'>Author: {item.author}</h2>
                         <h2 className='font-medium text-blue-400'>Views: {item.views}</h2>
                         <h2>{item.uploadTime}</h2>
                         <h2>{item.duration}</h2>
                         </div>
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Axios;
