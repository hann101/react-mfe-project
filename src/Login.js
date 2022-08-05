
import React from 'react';
import img from '.'



function Login() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];
    return (

        <form name="form1" >
            <div align="center">
                <table background="cpm_adm/images/admin/login/upback.gif" border="0" cellpadding="0" cellspacing="0" height="121" width="100%">
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p>&nbsp;</p>
                <table bgcolor="white" border="0" cellspacing="2" height="320" width="510">
                    <tbody>
                        <tr>
                            <td align="center">
                                <table border="0" cellpadding="0" cellspacing="0" height="310" width="499">
                                    <tbody>
                                        <tr height="50">
                                            <td colspan="4">
                                                <img src="/cpm_adm/images/admin/login/IPTV01.gif" style="vertical-align: top;" height="45" hspace="0" vspace="" width="289" />
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr bgcolor="#5599CC" height="3"><td colspan="5"></td></tr>
                                        <tr bgcolor="#FFFFFF" height="1"><td colspan="5"></td></tr>
                                        <tr bgcolor="#5599CC" height="1"><td colspan="5"></td></tr>
                                        <tr height="180">
                                            <td colspan="5">
                                                <img src="/cpm_adm/images/admin/login/logo.gif" style="vertical-align: top;" height="180" hspace="0" vspace="" width="499" />
                                            </td>
                                        </tr>
                                        <tr height="5">
                                            <td colspan="5"></td>
                                        </tr>
                                        <tr height="29">
                                            <td colspan="5" background="/cpm_adm/images/admin/login/copy.gif">
                                                <table background="/cpm_adm/images/admin/login/copy.gif" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="110"></td>
                                                            <td>
                                                                <img src="cpm_adm/images/admin/login/ID.gif" height="17" width="49" align="absmiddle" />
                                                            </td>
                                                            <td>
                                                                <input name="smartux_id" maxlength="12" style="font-size: 12px;" tabindex="1" type="text" value="${smartux_id} " />
                                                            </td>
                                                            <td>
                                                                <img src="/cpm_adm/images/admin/login/password.gif" height="17" width="63" align="absmiddle" />
                                                            </td>
                                                            <td><input name="smartux_pwd" maxlength="20" onkeypress="javascript:enterKey();" style="font-size: 12px;" tabindex="2" type="password" value="${smartux_pwd}" /></td>
                                                            <td><img src="cpm_adm/images/admin/login/loginbutton.gif" onkeypress="javascript:enterKey();" style="" onclick="javascript:go();" tabindex="3" height="20" width="45" align="absmiddle" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr height="5">
                                            <td colspan="5"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>

    );
}

export default Login;