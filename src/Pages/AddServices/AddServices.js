import { Button, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddServices = () => { 

    useTitle('Add Services');
    const handleSubmitNewService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.servicename.value;
        const serviceImg = form.serviceimageurl.value;
        const servicePrice = form.serviceprice.value;
        const serviceDescription = form.servicedescription.value;

        const serviceData = {
            title: serviceName,
            img: serviceImg,
            price: servicePrice,
            description: serviceDescription,
        }
        fetch('https://reflexlia-review-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success("Service Added Successfully");
                }
            })
            .catch(er => {
                toast.error("Service Not Added");
            });
    }

    return (
        <div className="flex justify-center mx-3">
            <div className="container md:w-1/3">
                <form onSubmit={handleSubmitNewService} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block text-sm text-gray-200 font-semibold">
                            <span>Service Name</span>
                        </div>
                        <TextInput
                            id="servicename"
                            name='servicename'
                            type="text"
                            placeholder="Enter Service Name"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block text-sm text-gray-200 font-semibold">
                            <span>Service Image URL</span>
                        </div>
                        <TextInput
                            id="serviceimageurl"
                            name='serviceimageurl'
                            type="text"
                            placeholder="Enter Service Image URL"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block text-sm text-gray-200 font-semibold">
                            <span>Service Price</span>
                        </div>
                        <TextInput
                            id="serviceprice"
                            name='serviceprice'
                            type="text"
                            placeholder="Enter Service Price"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block text-sm text-gray-200 font-semibold">
                            <span>Service Description</span>
                        </div>
                        <Textarea
                            id="servicedescription"
                            name="servicedescription"
                            placeholder="Leave a Service Description..."
                            required={true}
                            rows={4}
                        />
                    </div>

                    <Button type='submit' color="gray">Add New Service</Button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;