import styled from '@emotion/styled';

export const ButtonList = styled.ul`
list-style:none;
display: flex;
flex-direction: row;
margin: 0 auto;
padding: 0;`

export const ListItem = styled.li`
&:not(:last-child) {
	margin-right: 15px;
}`

export const ButtonOption = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  border-radius: 5px;
  padding: 10px 25px;
   font-weight: 400;
  font-size: 15px;
  background: yellow;
`;