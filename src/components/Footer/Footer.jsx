import React from 'react';
import './Footer.css'
import { BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-black mt-24'>
            <div className='w-[1280px] mx-auto'>
            <div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                <div>
                    <h3 className='logo'>Walks of Life</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='social-icons'>
                        <div className='facebook'>
                            <BsFacebook></BsFacebook>
                        </div>
                        <div className='twitter'>
                            <BsTwitter></BsTwitter>
                        </div>
                        <div className='instagram'>
                            <BsInstagram></BsInstagram>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Company</h5>
                    <Link to="">About us</Link><br />
                    <Link to="">Works</Link><br />
                    <Link to="">Latest News</Link><br />
                    <Link to="">Career</Link><br />
                </div>
                <div>
                    <h5>Product</h5>
                    <Link to="">Prototype</Link><br />
                    <Link to="">Plan & Pricing</Link><br />
                    <Link to="">Customers</Link><br />
                    <Link to="">Integrations</Link><br />
                </div>
                <div>
                    <h5>Support</h5>
                    <Link to="">Help Desk</Link><br />
                    <Link to="">Sales</Link><br />
                    <Link to="">Become a Partner</Link><br />
                    <Link to="">Developers</Link><br />
                </div>
            </div>
            <div className='lg:flex justify-between items-center'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by Walks of life</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;