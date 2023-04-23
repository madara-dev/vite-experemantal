import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
const socket = io("http://localhost:3001")

export default function Dashboard(props) {

    const [email, setEmail] = useState('');
    const [clicks, setClicks] = useState(0);
    const [globalclicks, setGlobalclicks] = useState(0)
    const [rank1, sentrank1] = useState('');
    const [rank2, sentrank2] = useState('');
    const [rank3, sentrank3] = useState('');
    const [rank4, sentrank4] = useState('');
    const [rank5, sentrank5] = useState('');
    const [rank6, sentrank6] = useState('');
    const [rank7, sentrank7] = useState('');
    const [rank8, sentrank8] = useState('');
    const [rank9, sentrank9] = useState('');
    const [rank10, sentrank10] = useState('');




    useEffect(() => {
        fetch('http://localhost:5000/jwt_decoder', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then((response) => response.json())
            .then(json => {

                if (json.success) {


                    setEmail(json.name)

                    setClicks(json.clicks)

                }
            })
    }, []);


    useEffect(() => {


        socket.on('send-message', (arg) => {
            setGlobalclicks(arg)
        })

    }, []);



    useEffect(() => {


        fetch('http://localhost:5000/leaderboardgetter', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then((response) => response.json())
            .then(json => {

                if (json.success) {


                    //   console.log(json.leaderboard[0]);
                      sentrank1(json.leaderboard[0])
                      sentrank2(json.leaderboard[1])
                      sentrank3(json.leaderboard[2])
                      sentrank4(json.leaderboard[3])
                      sentrank5(json.leaderboard[4])
                      sentrank6(json.leaderboard[5])
                      sentrank7(json.leaderboard[6])
                      sentrank8(json.leaderboard[7])
                      sentrank9(json.leaderboard[8])
                      sentrank10(json.leaderboard[9])

                }
            })
            // setGlobalclicks(arg)
            // localStorage.setItem('rank1',JSON.stringify({email: arg[0].email, clicks: arg[0].clicks} ))
            // localStorage.setItem('rank2',JSON.stringify({email: arg[1].email, clicks: arg[1].clicks} ))
            // localStorage.setItem('rank3',JSON.stringify({email: arg[2].email, clicks: arg[2].clicks} ))
            // localStorage.setItem('rank4',JSON.stringify({email: arg[3].email, clicks: arg[3].clicks} ))
            // localStorage.setItem('rank5',JSON.stringify({email: arg[4].email, clicks: arg[4].clicks} ))
            // localStorage.setItem('rank6',JSON.stringify({email: arg[5].email, clicks: arg[5].clicks} ))
            // localStorage.setItem('rank7',JSON.stringify({email: arg[6].email, clicks: arg[6].clicks} ))
            // localStorage.setItem('rank8',JSON.stringify({email: arg[7].email, clicks: arg[7].clicks} ))
            // localStorage.setItem('rank9',JSON.stringify({email: arg[8].email, clicks: arg[8].clicks} ))
            // localStorage.setItem('rank10',JSON.stringify({email: arg[9].email, clicks: arg[9].clicks} ))
 
   

                // console.log(arg)
            


    }, []);




    function clciked(params) {
        params.preventDefault()


        socket.emit('clicked', { globolclicks: 1 })


        setClicks(clicks + 1)

        fetch('http://localhost:5000/subbmitter', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                newclicks: 1,

            })
        }).then((response) => response.json())
            .then(json => {

                if (json.success) {

                }
            })

    }






    return (
        <>

            <div className='lighttext'> hello  {email.split("@")[0]}</div>

            <div className='lighttext'>you have this {clicks}</div>

            <div className='lighttext'> total clicks {globalclicks}</div>
            <form onSubmit={clciked}>


                <button type='submit'>click here</button>

            </form>
            
            <div className='lighttext'>clicks leaderboard</div>

            {/* <div className='lighttext'>{JSON.parse(localStorage.getItem('rank1')).email} has clicks {JSON.parse(localStorage.getItem('rank1')).clicks}</div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank2')).email} has clicks {JSON.parse(localStorage.getItem('rank2')).clicks} </div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank3')).email} has clicks {JSON.parse(localStorage.getItem('rank3')).clicks} </div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank4')).email} has clicks {JSON.parse(localStorage.getItem('rank4')).clicks} </div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank5')).email} has clicks {JSON.parse(localStorage.getItem('rank5')).clicks} </div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank6')).email} has clicks {JSON.parse(localStorage.getItem('rank6')).clicks}</div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank7')).email} has clicks {JSON.parse(localStorage.getItem('rank7')).clicks}</div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank8')).email} has clicks {JSON.parse(localStorage.getItem('rank8')).clicks}</div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank9')).email} has clicks {JSON.parse(localStorage.getItem('rank9')).clicks}</div>
            <div className='lighttext'>{JSON.parse(localStorage.getItem('rank10')).email} has clicks {JSON.parse(localStorage.getItem('rank10')).clicks}</div> */}

            <div className='lighttext'>{rank1.email} has clicks {rank1.clicks}</div>
            <div className='lighttext'>{rank2.email} has clicks {rank2.clicks}</div>
            <div className='lighttext'>{rank3.email} has clicks {rank3.clicks}</div>
            <div className='lighttext'>{rank4.email} has clicks {rank4.clicks} </div>
            <div className='lighttext'>{rank5.email} has clicks {rank5.clicks}</div>
            <div className='lighttext'>{rank6.email} has clicks {rank6.clicks}</div>
            <div className='lighttext'>{rank7.email} has clicks {rank7.clicks}</div>
            <div className='lighttext'>{rank8.email} has clicks {rank8.clicks}</div>
            <div className='lighttext'>{rank9.email} has clicks {rank9.clicks}</div>
            <div className='lighttext'>{rank10.email } has clicks {rank10.clicks}</div>
        </>


    



    )
}
