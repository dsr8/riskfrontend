import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider'; // Import your Slider component
import './RiskRegister.css';
import Navbar from './Navbar';


const RiskRegister = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [probability, setProbability] = useState('');
  const [impact, setImpact] = useState('');
  const [mitigation, setMitigation] = useState('');
  const [location, setLocation] = useState('');
  const [responsible, setResponsible] = useState('');
  const [status, setStatus]=useState(1);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sitecode , setSitecode]=useState('');
  const [bussinessunit , setBussinessunit]=useState('');


  const [risks, setRisks] = useState([]); // State to store risks

  useEffect(() => {

    fetchRisks();
}, []);

    // Fetch risks from the backend API
    const fetchRisks = async () => {
      try {
        const response = await axios.get('https://addminwebworld.com/laravel/risk/getRisk');
        const reversedRisks = response.data.data.reverse(); // Reverse the array to display the last element first
        setRisks(reversedRisks); //
        // // Set the fetched risks data into state
        // setRisks(response.data.datar.everse()); // Assuming 'data' contains the list of risks
      } catch (error) {
        console.error('Error fetching risks:', error);
      }
    };

  

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      details,
      type,
      category,
      probability,
      impact,
      mitigation,
      location,
      responsible,
      status:status,
      value:value,
      value2:value2,
      sitecode:sitecode,
      bussinessunit:bussinessunit,
    };

    try {
      const response = await axios.post(
        'https://addminwebworld.com/laravel/risk/store1',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false, // Important for sending cookies
        }
      );
      alert(response.data.message); // Show success message
      fetchRisks();

      // Reset form fields
      setTitle('');
      setDescription('');
      setDetails('');
      setCategory('');
      setType('');
      setProbability('');
      setImpact('');
      setResponsible('');
      setMitigation('');
      setLocation('');
      setValue(0);
      setValue2(0);
      setIsModalOpen(false); // Close modal after submit
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };

  const handleDelete = async (id) => {
    try{
        const response = await axios.post('https://addminwebworld.com/laravel/risk/delrisk',{id},{
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: false, // Important for sending cookies
          });
          alert(response.data.message); // Show success message
          fetchRisks();
    }
    catch (error) {
        console.error(error);
        alert('Something went wrong!');
      }
    // const updatedRisks = risks.filter((risk) => risk.id !== id);
    // setRisks(updatedRisks);

  };
  return (
    <div>
       <Navbar/> 

      <div className="body-content">
        <button className="add-risk-button" onClick={toggleModal}>
          <FontAwesomeIcon icon={faPlus} /> Add New Risk
        </button>
      </div>

     

 {/* Risk Table */}
 <div className="table-container">
      <table>
        <thead>
          <tr className="tbl-head">
            <th>Title</th>
            <th>Description</th>
            <th>Details</th>
            <th>Type</th>
            <th>Category</th>
            <th>Inherent Risk</th>
            <th>Residual Risk</th>
            <th>Probability</th>
            <th>Impact</th>
            <th>Mitigation</th>
            <th>Location</th>
            <th>Responsible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.title}</td>
              <td>{risk.description}</td>
              <td>{risk.details}</td>
              <td>{risk.type}</td>
              <td>{risk.category}</td>
              <td>{risk.inherent_risk} %</td>
              <td>{risk.residual_risk} %</td>
              <td>{risk.probability}</td>
              <td>{risk.impact}</td>
              <td>{risk.mitigation}</td>
              <td>{risk.location}</td>
              <td>{risk.responsible}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(risk.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Risk</h2>
            <p>Fields marked with * are required</p>
            <button className="modal-close-btn" type="button" onClick={toggleModal}>
              &times;
            </button>

            <form onSubmit={handleSubmit}>
              <label>Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label>Summary</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief summary of the risk"
                rows={6}
                cols={50}
              />

              <label>Details</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Detailed description of the risk"
                rows={6}
                cols={50}
              />

              <label>Type *</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="" disabled hidden>
                  Select Risk Type
                </option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Operational">Operational</option>
                <option value="compliance">compliance</option>
                {/* <option value="high">High</option>
                <option value="critical">Critical</option> */}
              </select>

              <label>Category *</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="BusinessContinuity">Business Continuity</option>
                <option value="PolicyEnforcement">Policy Enforcement</option>
                <option value="SocialEngineering">Social Engineering</option>
                <option value="DataProtection">Data Protection</option>
                {/* <option value="norisk">No Risk</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option> */}
              </select>

              <label>Site Code *</label>
              <select value={sitecode} onChange={(e) => setSitecode(e.target.value)}>
                <option value="" disabled hidden>
                  Select Site Code
                </option>
                <option value="HQ01">HQ01: Headquarters</option>
          <option value="PLT02">PLT02: Manufacturing Plant - West</option>
         <option value="BRN03t">BRN03: Branch Offie - North</option>
         <option value="RDC04">RDC04: Regional Distribution Centre</option>
         <option value="DC05">DC05: Data Center</option>
         <option value="LAB06">LAB06: Research Laboratory</option>
         <option value="WH07">WH07: Warehouse</option>
         <option value="RMT08">RMT08: Remote Offie</option>
                {/* <option value="high">High</option>
                <option value="critical">Critical</option> */}
              </select>
              <label>Business Unit *</label>
              <select value={bussinessunit} onChange={(e) => setBussinessunit(e.target.value)}>
                <option value="" disabled hidden>
                  Select Business Unit
                </option>
                <option value="FIN">FIN: Finance & Accounting</option>
         <option value="HR">HR: Human Resources</option>
         <option value="SM">SM: Sales & Marketing</option>
         <option value="CS">CS: Customer Support</option>
         <option value="IT">IT: Information Technology</option>
         <option value="OPS">OPS: Operations Management</option>
         <option value="R&D">R&D: Research & Development</option>
         <option value="LSC">LSC: Logistics & Supply Chain</option>
        </select>
        
              <div className='riskname'>
      <label>Inherent Risk Percentage: {value}%</label>
      <Slider 
        min={0} 
        max={100} 
        defaultValue={value} 
        onValueChange={(val) => setValue(val)} 
      />
      {/* <p>Selected Value: {value}%</p> */}
    </div>

    <div className='riskname'>
      <label>Residual Risk Percentage (after mitigation): {value2}%</label>
      <Slider 
        min={0} 
        max={100} 
        defaultValue={value2} 
        onValueChange={(val) => setValue2(val)} 
      />
      {/* <p>Selected Value: {value}%</p> */}
    </div>

              {/* <div className="riskname">
                <label>Inherent Risk Percentage: {value}%</label>
                <Slider min={0} max={100} value={value} onChange={setValue} />
              </div>

              <div className="riskname">
                <label>Residual Risk Percentage: {value2}%</label>
                <Slider min={0} max={100} value={value2} onChange={setValue2} />
              </div> */}

              <label>Probability *</label>
              <select value={probability} onChange={(e) => setProbability(e.target.value)} required>
                <option value="" disabled hidden>
                  Select Probability
                </option>
                <option value="Very likely">Very likely</option>
                <option value="Likely">Likely</option>
                <option value="Possible">Possible</option>
                <option value="Unlikely">Unlikely</option>
                <option value="Very unlikely">Very unlikely</option>
              </select>

              <label>Impact *</label>
              <select value={impact} onChange={(e) => setImpact(e.target.value)} required>
                <option value="" disabled hidden>
                  Select Impact
                </option>
                <option value="norisk">No Risk</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>

              <label>Mitigation Steps *</label>
              <textarea
                value={mitigation}
                onChange={(e) => setMitigation(e.target.value)}
                placeholder="Steps to mitigate the risk"
                rows={6}
                cols={50}
              />

              <label>Location *</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />

              <label>Responsible *</label>
              <input
                type="text"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
                required
              />

              <button type="submit" className="submit-btn">
                Add Risk
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskRegister;
