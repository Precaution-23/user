import React, { useState }  from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';


export default function Home() {
  const [cityDetails, setCityDetails] = useState<{date: string, city: string}[]>([])
  const [userDetails, setUserDetails] = useState<{firstName: string, lastName: string, dob: string}>()

  const clearForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    form.reset();
  } 

  // here we are submuitting city and ate arrved details 
  const submitCityDetails = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setCityDetails([...cityDetails, {
      date:  data.get("dateTravel") as string,
      city: data.get("city") as string,
    }])
    clearForm(event)
  }

  // here we are submitting user details 
  const submitUserDetails = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUserDetails({
      firstName:  data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      dob: data.get("dob") as string
    })
    clearForm(event)
  }

  // here we are sending data to the backend to be saved into the database 
  const sendToServer = () => {
    // sample json data holding values provided on the form
    const data = {
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      dob: userDetails?.dob,
      cityDetails: cityDetails
    }
    // ideally there should be an api that will send data to the backend with the details stored on the data variable
    // API LOGIC COMES HERE
  }

  return (
    <main className="grid justify-items-center">
      <section className="p-10 bg-gray-50">
        <div className="flex justify-center items-center text-[36px]">
            User Form
        </div>
        <div className="mt-4 w-[1012px] h-[248px] p-6 bg-white rounded-xl border-l-4 border-blue-600 flex-col justify-start items-start gap-8 inline-flex">
          <div className="text-gray-950 text-2xl font-medium leading-loose">
            Personal Information
          </div>
          <form onSubmit={submitUserDetails}>
          <div className="justify-start items-start gap-8 inline-flex">
            <div className="w-[300px] flex-col justify-start items-center gap-1 inline-flex">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">First Name</Label>
                <Input type="text" placeholder="Enter first name" name="firstName" />
              </div>
            </div>
            <div className="w-[300px] flex-col justify-start items-center gap-1 inline-flex">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Last Name</Label>
                <Input type="text" placeholder="Enter last name" name="lastName" />
              </div>
            </div>
            <div className="w-[300px] flex-col justify-start items-center gap-1 inline-flex">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Date of Birth</Label>
                <Input type="date" placeholder="" name="dob" />
              </div>
            </div>
          </div>
          <div className='mt-5'>
          <input className="px-4 w-[61px] h-[30px] bg-blue-600 rounded-sm text-white" value="Save" type='submit'/>
          </div>
          </form>
        </div>
      </section>
      <section className="p-10 bg-gray-50">
        <div className="w-[1012px] h-[248px] p-6 bg-white rounded-xl border-l-4 border-blue-600 flex-col justify-start items-start gap-8 inline-flex">
          <div className="text-gray-950 text-2xl font-medium leading-loose">
            Cities Travelled
          </div>
          <form onSubmit={submitCityDetails}>
          <div className="justify-start items-start gap-8 inline-flex">
            <div className="w-[300px] flex-col justify-start items-center gap-1 inline-flex">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Date Arrived</Label>
                <Input type="date" placeholder="Select date" name="dateTravel"/>
              </div>
            </div>
            <div className="w-[300px] flex-col justify-start items-center gap-1 inline-flex">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">City</Label>
                <Input type="text" placeholder="Enter city name" name="city"/>
              </div>
            </div>
          </div>
          <div className='mt-5'>
          <input className="px-4 w-[61px] h-[30px] bg-blue-600 rounded-sm text-white" value="Add" type='submit'/>
          </div>
          </form>
        </div>
      </section>

      {/* User Details Card */}

      <section className="p-10 bg-gray-50">
      <div className="flex justify-center items-center text-[36px]">
          User Details
        </div>
        <div className="w-[1012px] h-full px-16 py-6 bg-white rounded-xl border-t-4 border-green-500 flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-gray-950 text-2xl font-medium">
            Personal Information
          </div>
          <div className="gap-6">
            <div className="flex justify-start">
              <div>First Name: <span className='font-bold'>{ userDetails?.firstName }</span></div>
            </div>
            <div className="flex justify-start">
              <div>Last Name: <span className='font-bold'>{ userDetails?.lastName }</span></div>
            </div>
            <div className="flex justify-start">
              <div>Date of Birth: <span className='font-bold'>{ userDetails?.dob }</span></div>
            </div>
          </div>
          <div className="text-gray-950 text-2xl font-medium font-['Inter Display'] leading-loose">
              Cities Travelled
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">

              
              {cityDetails?.map((item, index)=>
              <div className="justify-start items-center gap-8 inline-flex" key={index}>
                <div className="text-gray-950 text-2xl font-medium font-['Inter Display'] leading-loose">
                  {index + 1}
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-gray-950 text-lg font-medium font-['Inter'] leading-normal">
                    City Name
                  </div>
                  <div className="text-neutral-400 text-lg font-medium font-['Inter'] leading-normal">
                    {item.city}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-gray-950 text-lg font-medium font-['Inter'] leading-normal">
                    Date Arrived
                  </div>
                  <div className="text-neutral-400 text-lg font-medium font-['Inter'] leading-normal">
                    {item.date}
                  </div>
                </div>
              </div>
              )}

              {
               userDetails || cityDetails.length > 0 ? (
                  <>
                  <Button onClick={sendToServer} variant='secondary'>Save Details</Button></>
                ) : <></>
              }
            </div>
            
        </div>
      </section>
    </main>
  );
}
