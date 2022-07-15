import React from 'react';
import "./Treeview.css";

export const Treeview = () => {
    return (
        <div className='Treeview-wapper'>
            {/* 

            svg + icon

            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"></path></svg>
            
            */}
            <div className="Treeview-container">
                <div className="Treeview-navbar">
                    <div className="Treeview-main">
                        <div className="main-icon">
                            <svg class="main-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                        </div>
                        <div className='main-name'>Main</div>
                    </div>
                    <div className="Treeview-vertical">
                        <div className="Treeview-ul">

                            <div className="Treeview-li">
                                <div className="Treeview-li-content">
                                    <div className="Treeview-li-icon">
                                        <svg class="li-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                    </div>
                                    <div className="Treeview-li-name">Hello</div>
                                </div>
                            </div>

                            <div className="Treeview-li">

                                <div className="Treeview-li-content">
                                    <div className="Treeview-li-icon">
                                        <svg class="li-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                    </div>
                                    <div className="Treeview-li-name">Subtree with children</div>
                                </div>


                                <div className="Treeview-Subtree">

                                    <div className="Treeview-Subtree-ul">

                                        <div className="Treeview-Subtree-li">
                                            <div className="Treeview-Subtree-li-content">
                                                <div className="Subtree-li-content-icon">
                                                    <svg class="Subtree-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                                </div>
                                                <div className="Subtree-li-name">Subtree with children child</div>
                                            </div>
                                        </div>
                                        
                                        <div className="Treeview-Subtree-li">

                                            <div className="Treeview-Subtree-li-content">
                                                <div className="Subtree-li-content-icon">
                                                    <svg class="Subtree-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                                </div>
                                                <div className="Subtree-li-name">Subtree with children child</div>
                                            </div>

                                            <div className="Treeview-children-child">

                                                <div className="Treeview-children-child-ul">
                                                    <div className="Treeview-children-child-li">
                                                        <div className="Treeview-children-child-li-content">
                                                            <div className="children-child-li-content-icon">
                                                                <svg class="children-child-li-content-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                                            </div>
                                                            <div className="children-child-li-content-name">children child</div>
                                                        </div>
                                                    </div>
                                                    <div className="Treeview-children-child-li">
                                                        <div className="Treeview-children-child-li-content">
                                                            <div className="children-child-li-content-icon">
                                                                <svg class="children-child-li-content-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                                            </div>
                                                            <div className="children-child-li-content-name">children child</div>
                                                        </div>
                                                    </div>
                                                    <div className="Treeview-children-child-li">
                                                        <div className="Treeview-children-child-li-content">
                                                            <div className="children-child-li-content-icon">
                                                                <svg class="children-child-li-content-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                                            </div>
                                                            <div className="children-child-li-content-name">children child</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="Treeview-Subtree-li">
                                            <div className="Treeview-Subtree-li-content">
                                                <div className="Subtree-li-content-icon">
                                                    <svg class="Subtree-icon-svg" viewBox="0 0 24 24" ><path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"></path></svg>
                                                </div>
                                                <div className="Subtree-li-name">Subtree with children child</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
