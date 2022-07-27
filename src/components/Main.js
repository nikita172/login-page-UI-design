import './main.css'
import { useEffect, useState } from 'react';
import Mainsection from './Mainsection';
export default function Main() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (loading) {
          setTimeout(() => {
          setLoading(false);
        }, 3000);
        }
      }, [loading]);

    return (
        <div>
            {loading?<span className="loader" /> : <Mainsection setLoading={setLoading} loading={loading}  />}           
                
        </div>
                    

    )
}
