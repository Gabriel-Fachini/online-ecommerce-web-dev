import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const OptionsItem = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    transition: 100ms ease-in-out;
    background-color: ${props => props.theme.colors.primaryLightest};
  }
`

export const View = ({ item, columns }: any) => {
  const navigate = useNavigate()

  return <OptionsItem onClick={() => navigate(`/ocularis/admin/products/view/${item.id}`, {
    state: {
      data: item,
      columns
    }
  })}>
    <FontAwesomeIcon icon={faEye} /> Visualizar
  </OptionsItem>
}