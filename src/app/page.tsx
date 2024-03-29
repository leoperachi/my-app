'use client'
import Image from "next/image";
import { FaDatabase, FaUserPen } from "react-icons/fa6";
import { IoLocationSharp, IoTerminalSharp } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { motion } from 'framer-motion';
import { VscAccount } from "react-icons/vsc";
import { BsMailboxFlag } from "react-icons/bs";
import { TiPhoneOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { useState } from "react";
import { FaAddressCard } from "react-icons/fa6";

export default function Home() {
  const [showPanel, setShowPanel] = useState(1);

  const submenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      scroll: false,
    },
    closed: {
      opacity: 0,
      x: -300,
      scroll: false
    },
  }

  function clickBtnSideBar(e: any): void {
    var length = e.target.id.toString().length;
    var id = '';

    if(length > 0){
      id = e.target.id;
    }
    else{
      length = e.target.parentNode.id.length;
      if(length > 0){
        id = e.target.parentNode.id;
      }
      else{
        id = e.target.parentNode.parentNode.id;
      }

      switch (id){
        case 'btnPersonal':
          setShowPanel(1);
          break;
        case 'btnEducation':
          setShowPanel(2);
          break;
        case 'btnLocation':
          setShowPanel(3);
          break;
        case 'btnProfXp':
          setShowPanel(4);
          break;
      }
    }
  }
  return (
    <>
      <div className="flex h-screen justify-center items-center" 
        style={
          { 
            backgroundImage: 'url("./resume_bg-image.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'  
          }}>
        <div className="home-tab-nav" style={
          {
            height: '86vh', 
            width: '53px', 
            backgroundColor: 'rgb(31 31 31)' 
          }}>
          <button id='btnPersonal' className='btnIcon' 
            onClick={clickBtnSideBar}>
              <FaUserPen className='iconButton' />
          </button>
          <button id='btnEducation' className='btnIcon' 
            onClick={clickBtnSideBar}>
              <PiStudentFill className='iconButton'/>
          </button>
          <button id='btnProfXp' className='btnIcon'
            onClick={clickBtnSideBar}>
              <MdWorkHistory className='iconButton'/>
          </button>
          <button id='btnLocation' className='btnIcon' 
            onClick={clickBtnSideBar}>
              <FaAddressCard className='iconButton'/>
          </button>
        </div>
        <div className="displayNone md:flex" style={
          {
            height: '90vh', 
            width: '400px', 
            backgroundImage: 'url("./leo-prof.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}>
        </div>
        <motion.div className="" hidden={showPanel !== 1} variants={submenuVariants} 
          animate={showPanel === 1 ? 'open' : 'closed'}>
          <div className="wFull md:w-full" style={{height: '86vh', backgroundColor: 'rgb(31 31 31)', color: '#fff', display: 'flex' }}>
            <div className="content-center" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-5 justify-center items-center" style={{backgroundColor: '#1f1f1f'}}>
                <div className="flex justify-center items-center">
                  <Image width={200} height={300} src="/leo-prof.jpg" alt="teste" className="imgSm" style={
                    {
                      height: '40vh', 
                      width: '250px', 
                      backgroundImage: 'url("./leo-prof.jpg")', 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center', 
                      borderRadius:'15px', 
                      marginBottom: '15px' 
                    }}>  
                  </Image>
                </div>
                <div className="flex">
                  <VscAccount size={25} style={{marginTop: '18px'}}/>
                  <h1 className="p-3 text-md lg:text-2xl">Leonardo A. Perachi</h1>
                </div>
                <div className="flex">
                  <BsMailboxFlag style={{marginTop: '18px'}}/>
                  <p className="p-3 text-md lg:text-md">Rua Burum 94 - Vila Assunção</p>
                </div>
                <div className="flex">
                  <BsMailboxFlag style={{marginTop: '18px'}}/>
                  <p className="p-3 text-md lg:text-md">Porto Alegre - Brazil CEP: 91900-170</p>
                </div>
                <div className="flex">
                  <TiPhoneOutline style={{marginTop: '18px'}}/>
                  <a href="https://wa.me/5551996974708" className="p-3 text-md lg:text-md">+55 51 996974708</a>
                </div>
                <div className="flex">
                  <MdAlternateEmail style={{marginTop: '18px'}}/>
                  <a href="mailto:leoperachi@gmail.com" className="p-3 text-md lg:text-md">leoperachi@gmail.com</a>
                </div>
                <div className="flex">
                  <SiLinkedin style={{marginTop: '18px'}}/>
                  <a href="https://linkedin.com/in/leonardoperachi" className="p-3 text-md lg:text-md">www.linkedin.com/in/leonardoperachi</a>
                </div>
                <div className="flex">
                  <FaGithub style={{marginTop: '18px'}}/>
                  <a href="https://github.com/leoperachi" className="p-3 text-md lg:text-md">https://github.com/leoperachi</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="" hidden={showPanel !== 2} variants={submenuVariants} 
          animate={showPanel === 2 ? 'open' : 'closed'}>
          <div className="wFull md:w-96" style={{height: '86vh', backgroundColor: 'rgb(31 31 31)', color: '#fff', display: 'flex' }}>
            <div className="content-center overflow-auto" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-5" style={{backgroundColor: '#1f1f1f'}}>
                <div className="flex flex-wrap">
                  <div className="flex-none w-64 mr-5">
                    <Image src="/puc.jpg" alt={"leo"} width={100} height={100} style={{borderRadius:'75px', paddingBottom:5}}></Image>
                    <h2 className="text-lg">Bachelors Computer Science</h2>
                    <p className="text-sm">Pontifícia Universidade Católica do Rio Grande do Sul</p>
                    <p className="text-sm pb-3">2006-2011</p>
                    <h2 className="text-lg">Developing Apps with Android</h2>
                    <p className="text-sm pb-10">2014</p>
                  </div>
                  <div className="flex-initial w-64  mr-5">
                    <Image src="/senac.png" alt={"leo"} width={100} height={100} style={{borderRadius:'25px', paddingBottom:5}}></Image>
                    <h2 className="text-lg">Assembly and Maintenance of Computers</h2>
                    <p className="text-sm">SENACRS</p>
                    <p className="text-sm pb-10">05/2008</p>
                  </div>
                  <div className="flex-initial w-64">
                    <Image src="/ih.png" alt={"leo"} width={150} height={150} style={{borderRadius:'25px', marginBottom: 10, paddingBottom:5}}></Image>
                    <h2 className="text-lg">Advanced English Commnication</h2>
                    <p className="text-sm">International House Sydney</p>
                    <p className="text-sm">08/2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="" hidden={showPanel !== 3} variants={submenuVariants} 
          animate={showPanel === 3 ? 'open' : 'closed'}>
          <div className="wFull md:w-full" style={{height: '86vh', backgroundColor: '#232323', color: '#fff', display: 'flex' }}>
            <div className="content-center" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-5" style={{backgroundColor: '#232323'}}>
                <h2 className="text-xl flex"><IoTerminalSharp style={{marginTop:'5px', marginRight: '5px'}} />Programing Languages</h2>
                <div className="p-3">
                  <p>Front End</p>
                  <div className="p-4" style={{paddingTop: '3px', paddingBottom: '3px'}}>
                    <p>Asp.net, Asp.net MVC, Javascript, Angular, React, NextJs, Ionic, Bootstrap, Tailwind, Html5, CSS</p>
                  </div>
                  <p>Back End</p>
                  <div className="p-4" style={{paddingTop: '3px', paddingBottom: '3px'}}>
                    <p>C#, VB.net, PHP, Javascript, NodeJS, NestJs</p>
                  </div>
                </div>
                <h2 className="text-xl flex"><FaDatabase style={{marginTop:'5px', marginRight: '5px'}} />Databases</h2>
                <div className="p-3">
                  <p>SQL (strong SQL Language: Inner, Left, Outer joins / modeling tables / views, procedures)</p>
                  <div className="p-4" style={{paddingTop: '3px', paddingBottom: '3px'}}>
                    <p>SQL Server, MySQL, Oracle</p>
                  </div>
                  <p>No-SQL</p>
                  <div className="p-4" style={{paddingTop: '3px', paddingBottom: '3px'}}>
                    <p>MongoDB</p>
                  </div>
                </div>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Other</h2>
                <div className="p-3">
                  <p>Git</p>
                  <p>Rest Api</p>
                  <p>ORMs: Entity Framework, Prisma, Mongoose, nHibernate</p>
                  <p>SCRUM Agile Methods</p>
                  <p>UML</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="" hidden={showPanel !== 4} variants={submenuVariants} 
          animate={showPanel === 4 ? 'open' : 'closed'}>
          <div className="wFull md:w-full" style={{height: '86vh', backgroundColor: '#232323', color: '#fff', display: 'flex' }}>
            <div className="content-center" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-5" style={{backgroundColor: '#232323'}}>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />NT Consult</h2>
                <p>08/2014 - 05/2015</p>
                <p>Developer & Analist</p>
                <p className="text-sm md:text-lg">Government system designed to manage purchases made by the state</p>
                <p className="text-sm md:text-lg">government of Rio Grande do Sul.</p>
                <p className="text-sm md:text-lg">Asp.net MVC / JQuery / rest api / entity framework / SQL Server</p>
                <br></br>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Compuletra</h2>
                <p className="text-sm md:text-md">10/2013 - 04/2014</p>
                <p>Developer</p>
                <p className="text-sm md:text-lg">Developing both backend and frontend vehicle inspection system. Government</p>
                <p className="text-sm md:text-lg">system with Asp.net (classic), windows forms, rest apis, Entity Framework and SQL Server.</p>
                <br></br>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Invest Insurance</h2>
                <p>11/2012 - 10/2013</p>
                <p>Developer & Analist</p>
                <p className="text-sm md:text-lg">Development and analysis focused for the insurance area. Using</p>
                <p className="text-sm md:text-lg">.net framework 4.5: Asp.net MVC, Entity Framework, Knockout, crystal reports. SQL Server for database.</p>
                <br></br>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Célebre Informática</h2>
                <p>08/2010 - 08/2012</p>
                <p>Developer</p>
                <p className="text-sm md:text-lg">Development of platform-based systems with .net 4. Using asp.net (classic),</p>
                <p className="text-sm md:text-lg">crystal reports, javascript, api rest. Database: oracle, sql server. Truck fleet management system</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
