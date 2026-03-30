import { useSearchParams } from 'react-router-dom';
import { CheckoutModal } from '../components/CheckoutModal';

export const Subscribe = () => {
  const [searchParams] = useSearchParams();
  const variety = searchParams.get('variety') || 'dasheri';
  const plan = searchParams.get('plan') || 'mature';
  const isGifting = searchParams.get('gifting') === 'true';

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <CheckoutModal 
        initialVariety={variety} 
        initialPlan={plan}
        initialGifting={isGifting}
      />
    </div>
  );
};