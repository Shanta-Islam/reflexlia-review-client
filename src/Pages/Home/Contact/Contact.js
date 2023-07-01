import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';

const Contact = () => {
    return (
        <div className='container m-16'>
            <div className='text-center'>
                <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">Contact</h2>
            </div>
            <form className="flex max-w-md flex-col gap-4 mx-auto" action='https://formspree.io/f/mvojplja' method='POST'>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        placeholder="Your Name"
                        required
                        type="text"
                        name="name"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="Your Email"
                        required
                        type="email"
                        name="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="phone1"
                            value="Your phone"
                        />
                    </div>
                    <TextInput
                        id="phone1"
                        placeholder="Your Phone"
                        required
                        type="text"
                        name="phone"
                    />
                </div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="message"
                        value="Your message"
                    />
                </div>
                <Textarea
                    id="message"
                    placeholder="Leave a message..."
                    required
                    rows={4}
                    name="message"
                />
                <Button type="submit" color="gray">
                    Contact
                </Button>
            </form>
        </div>
    );
};

export default Contact;