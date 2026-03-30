import { Navigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { LogOut, MapPin, Calendar, FileText } from 'lucide-react';

export const Dashboard = () => {
  const { order, setOrder } = useOrder();

  if (!order) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    setOrder(null);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-heading font-bold text-text-primary">Welcome back, {order.customerDetails.name.split(' ')[0]} 👋</h1>
            <p className="text-text-muted mt-1">Here's what your tree is up to.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 font-semibold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors w-fit"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Tree Profile */}
          <div className="lg:col-span-1 bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100">
            <div className="h-48 bg-green/10 flex items-center justify-center relative">
              {/* Optional Placeholder Image */}
              <div className="text-6xl absolute z-10">🌳</div>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-text-primary">{order.variety} Tree</h3>
                  <p className="text-sm font-semibold text-orange">{order.stage} Stage</p>
                </div>
                <div className="bg-background px-3 py-1 rounded text-xs font-mono font-bold text-text-muted">
                  {order.id}
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <MapPin size={18} className="text-green" />
                  <span>Block B, Row 4, Zaheerabad Farm</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <Calendar size={18} className="text-gold" />
                  <span>Planted: 3 years ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            
            {/* Expected Harvest */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div>
                <h4 className="text-lg font-bold text-text-primary mb-1">Expected Harvest</h4>
                <p className="text-sm text-text-muted">Your tree is resting for the winter. Flowering begins in February.</p>
              </div>
              <div className="bg-green/10 text-green px-6 py-4 rounded-xl text-center min-w-[140px]">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">Est. Yield</div>
                <div className="text-2xl font-bold">{order.yield}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Delivery Slots Stub */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                 <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                   📅 Delivery Preference
                 </h4>
                 <p className="text-sm text-text-muted mb-4">
                   Select your preferred delivery windows for the upcoming summer season.
                 </p>
                 <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl text-center text-text-muted font-medium bg-gray-50/50">
                    Slot selection opens in April
                 </div>
              </div>

               {/* Seasonal Reports */}
               <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                 <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                   📝 Farm Reports
                 </h4>
                 <div className="space-y-4">
                    {[
                      { date: 'Oct 15, 2025', title: 'Post-monsoon pruning completed' },
                      { date: 'Sep 02, 2025', title: 'Organic compost applied' },
                      { date: 'Jul 20, 2025', title: 'Season wrap-up summary' },
                    ].map((report, i) => (
                      <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="w-10 h-10 bg-orange/10 text-orange rounded-lg flex items-center justify-center shrink-0">
                           <FileText size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-muted mb-0.5">{report.date}</div>
                          <div className="text-sm font-medium text-text-primary">{report.title}</div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};