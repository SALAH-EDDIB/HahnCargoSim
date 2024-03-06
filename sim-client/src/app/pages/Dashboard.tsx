import React from 'react';
import MapComponent from '../common/MapComponent';
import AdminLayout from '../layout/AdminLayout';

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
    
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>CargoConnect</h1>
          
        </div>
        <MapComponent />
      </section>
    </div>
     
      
    </AdminLayout>
  );
};

export default Dashboard;