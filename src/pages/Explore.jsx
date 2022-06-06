import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ExploreBtn, ExploreSection } from '../components/style';

export default function Explore() {
  const history = useHistory();
  const { width } = window.screen;

  return (
    <>
      <Header title="Explore" />
      <ExploreSection width={ width }>
        <ExploreBtn
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </ExploreBtn>
        <ExploreBtn
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </ExploreBtn>

      </ExploreSection>
      <Footer page="explore" />
    </>
  );
}
