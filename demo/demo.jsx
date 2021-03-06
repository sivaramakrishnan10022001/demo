import React from "react";
import "./demo.css";

class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    category: "mobile",
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    id: 2,
                    category: "bike",
                    title: "qui est esse",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    id: 3,
                    category: "mobile",
                    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                },
                {
                    id: 4,
                    category: "laptop",
                    title: "eum et est occaecati",
                    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                },
                {
                    id: 5,
                    category: "ipad",
                    title: "nesciunt quas odio",
                    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
                },
                {
                    id: 6,
                    category: "laptop",
                    title: "dolorem eum magni eos aperiam quia",
                    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
                },
                {
                    id: 7,
                    category: "ipad",
                    title: "magnam facilis autem",
                    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
                },
                {
                    id: 8,
                    category: "mobile",
                    title: "dolorem dolore est ipsam",
                    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
                },
                {
                    id: 9,
                    category: "bike",
                    title: "nesciunt iure omnis dolorem tempora et accusantium",
                    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
                },
                {
                    id: 10,
                    category: "mobile",
                    title: "optio molestias id quia eum",
                    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
                },
                {
                    id: 11,
                    category: "laptop",
                    title: "et ea vero quia laudantium autem",
                    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
                },
                {
                    id: 12,
                    category: "ipad",
                    title: "in quibusdam tempore odit est dolorem",
                    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
                },
                {
                    id: 13,
                    category: "mobile",
                    title: "dolorum ut in voluptas mollitia et saepe quo animi",
                    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
                },
                {
                    id: 14,
                    category: "bike",
                    title: "voluptatem eligendi optio",
                    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
                },
                {
                    id: 15,
                    category: "laptop",
                    title: "eveniet quod temporibus",
                    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
                },
                {
                    id: 16,
                    category: "ipad",
                    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
                    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
                },
                {
                    id: 17,
                    category: "ipad",
                    title: "fugit voluptas sed molestias voluptatem provident",
                    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
                },
                {
                    id: 18,
                    category: "laptop",
                    title: "voluptate et itaque vero tempora molestiae",
                    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
                },
                {
                    id: 19,
                    category: "mobile",
                    title: "adipisci placeat illum aut reiciendis qui",
                    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
                },
                {
                    id: 20,
                    category: "bike",
                    title: "doloribus ad provident suscipit at",
                    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
                },
                {
                    id: 21,
                    category: "ipad",
                    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
                    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
                },
                {
                    id: 22,
                    category: "ipad",
                    title: "dolor sint quo a velit explicabo quia nam",
                    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
                },
                {
                    id: 23,
                    category: "laptop",
                    title: "maxime id vitae nihil numquam",
                    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
                },
                {
                    id: 24,
                    category: "bike",
                    title: "autem hic labore sunt dolores incidunt",
                    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
                },
                {
                    id: 25,
                    category: "laptop",
                    title: "rem alias distinctio quo quis",
                    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
                },
                {
                    id: 26,
                    category: "bike",
                    title: "est et quae odit qui non",
                    body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
                },
                {
                    id: 27,
                    category: "mobile",
                    title: "quasi id et eos tenetur aut quo autem",
                    body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
                },
            ],
            filterData: [],
            category: ""
        }
    }

    componentDidMount() {
        const portfolio = document.querySelector('.portfolio-gallery'),
            portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
            portfolioCats = document.querySelectorAll('.portfolio-cats > li');
        let parentWidth = portfolio.offsetWidth,
            windowWidth = window.innerWidth;

        portfolioCats.forEach(cat => {
            cat.addEventListener('pointerdown', function () {
                const dataFilter = this.dataset.filter;
                const el = [];
                if (dataFilter === '*') {
                    positionItems(portfolioItems);
                } else {
                    portfolioItems.forEach(item => {
                        if (item.dataset.filter == dataFilter) {
                            el.push(item);
                        } else {
                            item.style.cssText = 'transform: scale(0.1); opacity: 0;';
                        }
                    });
                    positionItems(el);
                }
            });
        });
        // Count Number of Items Per Row
        function countRowsItems() {
            let rowItems = 0;
            if (windowWidth <= 768) {
                rowItems = 1;
            } else if (windowWidth <= 992) {
                rowItems = 2;
            } else {
                rowItems = 3;
            }
            return rowItems;
        }
        // Position each item in its place
        function positionItems(items) {
            let rowItems = countRowsItems();
            let y = 0;
            let x = 0;
            let itemCount = 0;
            items.forEach((item, i) => {
                item.style.cssText = `transform: translate3d(${x * (parentWidth / rowItems)}px, ${y * 220}px, 0); opacity: 1;`;
                x++;
                if (x % rowItems == 0) {
                    y++;
                    x = 0;
                }
                itemCount = i;
            });
            portfolio.style.height = `${Math.ceil(itemCount / rowItems) * 220}px`;
        }

        positionItems(portfolioItems);

        window.addEventListener('resize', () => {
            parentWidth = portfolio.offsetWidth;
            windowWidth = window.innerWidth;
            positionItems(portfolioItems);
        });


        let newdata = Object.assign([], this.state.data);
        this.setState({
            filterData: newdata,
            active: true
        })


    }

    render() {
        return (
            <section class="portfolio section">
                <ul class="portfolio-cats" >
                    <li data-filter="*">All</li>
                    <li data-filter="mobile">mobile</li>
                    <li data-filter="bike">bike</li>
                    <li data-filter="laptop">laptop</li>
                    {/* <li data-filter="ipad">ipad</li> */}
                </ul>
                <div class="portfolio-gallery">

                    {this.state.data.map((item, index) => {
                        return (
                            <div class="portfolio-item" data-filter={item.category} key={item.id}>
                                <div class="item-inner">
                                    <h1 className="category">{item.category}</h1>
                                    <div className="item">{item.title}</div>
                                    <div className="body">{item.body}</div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        )
    }
}

export default Demo;