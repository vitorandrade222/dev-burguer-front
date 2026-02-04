import styled from 'styled-components';
import BannerHamburguer from '../../assets/banner-menu.svg';
import BackgroundHome from '../../assets/backgroud-home.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: url('${BackgroundHome}');
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;

  background: url('${BannerHamburguer}');
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
    font-size: 96.26px;
    line-height: 69%;
    color: #fff;
    position: absolute;
    top: 30%;
    right: 20%;
    text-align: center;
  }

  span {
    color: #fff;
    position: absolute;
    bottom: 21%;
    right: 22%;
  }
`;
export const CategoriesMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 50px;
  padding-bottom: 120px;
`;

export const CategoryButtom = styled(Link)`
  text-decoration: none;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? ' #9758a6' : '#525252')};
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  line-height: 20px;
  padding-bottom: 5px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;

  max-width: 1280px;
  margin: 40px auto;
`;

export const ButtomBack = styled(Link)`
  position: absolute;
  bottom: 20px; /* distância dos produtos */
  left: 50%;
  transform: translateX(-50%);

  font-size: 25px;
  cursor: pointer;
  color: #fff;
  height: 50px;
  width: 200px;
  background: #8758a6;
  border-radius: 5px;
  border: 0;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #412a50;
  }
`;
