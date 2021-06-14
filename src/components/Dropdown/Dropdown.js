import React from 'react';
import {DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap} from '../Dropdown/DropdownElements';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';

const Dropdown = ({ toggle, isOpen }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index)=> {
                        const {title, link} = item;
                        return (
                            <DropdownLink to={link} key={index}>
                                {title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>

        </DropdownContainer>
    )
}

export default Dropdown
