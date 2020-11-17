import React from "react";
import {
  makeStyles,
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  cardBlur: {},
  card: {
    width: "185px",
    height: "265px",
    borderRadius: "10px",
    background: "linear-gradient(to right, red , yellow)",
    boxShadow: "-11px 11px 31px #191919, 11px -11px 31px #292929",
    "&:hover": {
      background: "black",
      transform: "translateY(-5px)",
      transition: "0.4s ease-out",
    },
  },
  cardContent: {
    display: "row",
    alignItems: "left",
    marginTop: "-12px",
    marginLeft: "-15px",
    // fontSize: "20px"
  },
  box: {
    margin: "12px 12px",
  },
  media: {
    width: "155px",
    height: "155px",
    margin: "17px auto 17px",
    // padding:"17px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cardTitle: {
    fontSize: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const cardClickHandler = (data) => {
  console.log("card click");
  console.log(data);
};

const MusicCard = ({ musicData }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card
        className={classes.card}
        onClick={() => cardClickHandler(musicData)}
      >
        <CardMedia
          component="img"
          className={classes.media}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFhUXFRUXFhUVFxIXFRUVFRUWFxUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tKy0rLSstLS0tKy0tLSstLS0tLS0tLS0tKy0tKy0tLSs3LS0rLS0tNzcrKy0rLTcrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAABAwMCAwcCBAUCAwkAAAABAAIRAwQhEjEFQVEGEyJhcYGRobEUMlLBBxVC0fBy8SNzgiQ0Q1NiY5Ki4f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgMBAAMAAgMAAAAAAAABAhEDEiExE0FRIjIEYXH/2gAMAwEAAhEDEQA/AD2t6jkkGZCsqVu14mcym9zDohYaa58UmX0G8AbhceyRsrOvQzgJPZtgbJlccVb3J0+alpUsZR1RkNG0rrKXgJJHRV6P8QNKjGy4aR5qxtqG5JwBKVCi1zh4t0aL/BXilJyM+adUtduiNcWucc7GE+4ewEN90utHbCKt1korCgNbgrS6qsa1pAzlD2lVgc4mMt2Ro++P8ONIDkpaVR1OXMwR9k2leNJyAIKF4hxik10F7RJ6hHUvyzXwbSDnGQ2Sd5UFSmQ70TanH6LGCKjfWQh6XFwSDIM81nZezp4s8bjdjLdmunqjMmU5tucYhRG8GANp8SdUvJODPJE/2ZZcn+IhtmZMJ1AaA7Vsh7fiGlpadyg+L1HOaIwJyZWsuqxvJ4Oo0Gu2gA9FBXgVI3wgbCpoa4F2+2dkLUraXfnE+qL9224+ezLazoVGiq1zgY2HqrX8UAQ7kCsncv1ua4PA0jOUba3gxLwQubn47nlLP0ePP/tv9ta/iLdZwPyyOqqL+8wHBu5yq26udD+91iCNMSgal7IifqqvHtjeTOXeK4unNqYBzpSfxQNod07BBEHyVMazGO/NJI2BK4806jsn7rXj3jNC53L2rH+Zjr9UlWdzR/V90lfZGsk1pxDQY1A9VPT4xLtIM5WUOsbECcom0DgdcjH3T0LdtFX4tpcRJ9E2vxgahzkKgqUi8kl+TuUx1oZA1ILxpLvisMY4g9AoH8YOkjpkCVS1xIDdRgbIYW0Tkp6LcaKz4rUeSMARnPJC0+MPnBaIMISwotbuTJ+ynHC2uO3uptg8PqcWeHHIA6p9zfua1rpBJ+YTrfhLXHMwEU/hbXOBxA2S7QwFHiZ6g4Q1O/dqkuAjr08laV7drf6QsfxXibi402QJMDA/3Sl3V6F8T4zUe5zWu0s2nAc708kFSsG4Lp6kuJP/ANZ+6gp0AzxucAebnHb0Chfxqi04JcTzImfQLTRyRZOsWxLTHrpA/dcbSjLRnqKn9wqWt2kc7DKQMc4A+TKr63GX/pA9C5PQ22dHi5ZLXOe2dtYBbP8AqaYVjR42xoDnTjfOPZeajijhB+gOPcHCsbXijX+EiPI7eyWi8rcMuKjpqBji0nBypS6o8CB7LL8P4++iDSiWEzE7HyWt4NXFVoe0xyI80eJsPtrd5zowOUod9pVdVLxSx0WgpPawicxv5ptw/U6WkgeSi2F6oLi1qgHwbqO3t6wAbpAV9dMnIcn1qZDQRl3NKZQbqjv6dR4DIEN+pUTrCsRIAVk5zi7IhGMfIhPehus063qh2owprZtZgLiRJ2Wjfah242Qly2eWEpnKNqDRW/UElc6R0CSvcLYS/wCF6s0+XIoQWdRo0x6rYN4bU3LSq654fVJPgcsZlkLGbALD4kZTrAsk78kUeF1ScsPwgLm0eTOlwG0QVpLtIaq/on2rXPO0gZKOsuHjdwJPRWjWsYIaIJ3VXPUPStsbR5drcICPrAtXX3PRcJ1jPJZ9rb6qeJQ/SIndSMuRCqw7P7JAmYmEWbNP2g4l3VFxxJwF5z+I0N17uJwr/txdeJtMHlPuefwPqsY+Tn2CvCaOJKr9WX+I8t9I9G8/Vd/DDmCSeW3tA+yVuzY7k/QIynDTJy77K9no2rTc0RAaADgem3koKfDCR4zBP0RH4nOfhI3Beeg5noPVPZaM/As/6Rt69VA+gG40jrOxRb6gGx+P7lDVqgdjKR6Ok6YyR9R/dEcM4nUoulhkcxlB064GNguVaJ/O0xnEb/CCek8LvO8YHg7ico8VJ3wsj2YvBr7qZECPMxn6rYOoErLLwH0qc77JhOfzJtSrBA2hRvbuQphDN909lPOFWmsQQijdgN0z4ipu9i6EVqx2G3VC3FVRNrlv5imPOcI0iud6Oi4pu5K6q2SxPFagjKkHGHnZUDax0iVy4Lv6eiXrSrit2kczESu0+0gIy0fRZSux+zhJ6hOtqURqBnor3NM9tfb8fpuP5B8KWpxOg4maYWcZbuGRvyUVLVMcxujapWjNe1O7YUgr2hGkYHksncVD/umW7+Z5IPbW/gLY/wBZC5T4Xbgz3hPSYWet7olS14dzgpdv6e2O7asAu6gDpENAPqAs/WZmBtAVj2jaRVdJnb7Ifg9Pva7KfnJ9AtP1teM2suD8LcQSUAGEuceTSZ+s/ZelW1o0AABUPEeAtHegOHiLjnkXZhYTk3XTlxyTTBNnJnmpqbldU+zhhuRjfM5Un8gIO4Wv5JGc4rVQQo30vJaVnBY3UdfhgU/ki/xMqKRJyEdRwQDtmVZmxhB8SboMq5ntllx6F9nKZFdobkzj0B3+F6IbmMGPNY/+HgYbk6zA7twn3C9CbwWgTqFVLObrJU17hjsEe6hfWAOkbK5PZlpyKqmpdnI/raeiiTQ0prik0DUd4wqt1Mkz5rTXPZ+q7+pp91Aez9b/ANPyiJ6q6iARDilUEEac+SNfwKqDhvwpK/C6jADoJd5ckHIHhy6l3dX/AMp6SnR6VeqRBypaFBzuemOqjadJ2B80UysM5+UZbI63cGug+LzhWY0GDpCFo1ABmFHVqxyMLLQ0IrswYxPNCUbPyMnmumqSPIKSjegDOU7vRBq3BXOdBd4fqo6fBWtyXGFbNucYEqOpeSIDfZEzzPSjuWEPhjTCg7txkTC0VR4iXb8gFW1Yadt1rjmGa7Q8HJAIMvds2NwN89VV9laQbc5a7XpIAERjeZ9FtqzZrUidtLvplU7A03tMsEZIM/1QDlLvbbjXbhhMccc4XFa933zGNqd3ScTJAbrAAmCSCpa9a2Zh3id1dLiT6laDiVg0hriMNdJ/0kEOPtM+yquKcGbBDR4Ty9NitODlxxnsRzcdyrPXN3QOGN0n9Q8JmfJCVeLVaDmhwNQOnRESY3B67hXFDghMAiAFYcN4SHXTJ/LQaSf+ZVggezQD7quTOZe1HHx5Y+Rl28eqVH6GtLDBJ1RiOanFxyLiT1JIHwEf2i4Z3d3q2bVYWj/mNIdHuAfdD/y0bOB9espYddbLk77041hI8JI99Q+pVDxaq86mOaGlkHUPyvB0xHnBmFreH8LhwcCR5cvYKq45aB1xTpuAgST5uaGt+7Snfom74J7D2zhqqEYdgfP+y2dMbRIlUnZNkipmIcI+Fe1KZBGeay7Wlnj1uiqvczGoqCpf1WwWuKs7qgCAecKouC1p2kI2mwZ/M64E6kO3tJUByRPTKWokYA2VRcl2qYj2V40tNHb9pnHcfdFU+0E8j8rJ21bkUZTe1xMSik0f8+HR3yElm+4HUpJbM6nw9xEmQE/8M0byfsgv5m4gkSu29Z8zJzyUWZI2PLm4wcKRlduxBPugK9cxEZUNEv8A0+yXUbWty8RDRHuoKdIE7IZkgSfqpaFck5ISg2n1FuJhTNqhmZCEq7kiCoPxIjbKehsdUqAiZlV9W91EQSha9x0KhtC6ZiR1VzHzZbXvdyAZkg4HkRBHwgjZd2aLxJh5MwZ0uEeLodlx1ZgIdOZ9lbXFy2o06Q4vIw3zWWWN3uOz/j8s63GrClUkIWuBTHhPh/SRLR/pggj028kDTuyAgL3iDj6LP2V0zVgw3xedLYYCYL8kjzBJgfCJ4bdW1E91TqBziSTmSXHcnqVS2vFaektADuoVZcU3GTT0DoJ291pq0vJ8X/aC4oVR3dRwEkEGQCHDYjzCBtr4NJa8ayDGtpALvMtiJ9CPRZy5tagMuIPvKe69aIkaSqks+M7Zb742H40EeAaT+omT7CAAfPKoeL0P+LTcOTT98D1UttdzCtbCnrqtJEtbBM+UlLtTsxno3hXDDRpAH8zvE7yJ5I5wEoi8u2wCq65u5Ag+6uOTLLd2toGnzIQVag1zVJbXDi0QMJj2u2kBA2boEAKvurUkooudtKbJ8kEqTbEGU8WhkEbFHVsFSW1RgHi2VbGkHchJGTT6pJDTLW9y0iDPlCMrNhstJVuez1Jxxg7+SE4haVGnSBI6hF9qbhYpH3RImchSUuIOkT7qQ8NqDGlRfh6mxYfhXqFoVdcQBbj4QrXz5BPpWDmmdPyn1LJ24+EpjIWnO7I2dKhrh42GE+la1CYEqYU3jDgYRfBoCxpcOcLpqFuBKtm0AB+VS0HU9nNCLnBpVWVm58OJV1TdoIA/NyI3CktbZucx06Kuu3upvMQTP0UzPdHwQTBIduSh7hjS0t6hSUagrUe8aZMuEjq0wUBSuc55LDKXb0OL/WbOsOztJvigk9JOVNe8So0xp/DA/wDTKs7e4aRupa95TaMx9Ed61kjKC/pPwLeP+n90LX4NSOYM+p+y0FW/Y6cBAVqgVdrWeU/qChTGAOUBayybDeUAKg4VRl2p23JXDTAwVcjn5MpfDa1bl54UJkbhF0rWTJwE+6tiRCplpDa1ng42RF6CYOZhQWNItMI2u6GY+qBIrzULRqOylZVD243UJqGIjCbTZBQCqVCMFSjzhPa1jp1bpU6XnITCPW1JTd2OiSWgvGW8CdJJU1kDkOafJS/il38Qsu1aUPVY+TpbjzCgmof/AA/srA11w3EI70tBKTXEZpj4CcbeXCaYjyRJuVw1yj8lLrEjrVg/KxQ3NCWYYJ+qd35Tm1krns9RSts3k+Kn9lOeDsP9Oeqs+8Mprq0blTP+j1FceFdB7LP9qW9wwAganHHXSN1p7ritOmJe8DE5K867VcV76rqE6IAbIIx6K8Jdl1iw7K1WCk6iDs57h5hxn6EqLiVmCSeazdK5LHBzTBC0VnxVtYZw4bj9x5I5MbLt08eU1pVupVW7FD1rqpzWhLQUNXtmkGVMyXcFFSrvdgKysm+Nus+EEE9IBym0aABwo+J1Qym88yCB6nA+6vf8Z3HUegVeB5DmzHTlHknHhr/0ypOzF+alrSdudIafVuP2VoKxRc78c/WAPwTg4YxH1SpWzs6h6BHGoU7UVPajrFMLetJhohT3FkXjbSR0Vq1xXHORM6OrNDhzxyTTZ1ScgAfVaQuK5pKv8g6RnKvD3jZdp2dQCIC0WgpaT0R+SjpFB+CektBpST/JR0gFlcKXvwgdJCQBU3Euw41B1Tm1h1QOkp3cHdHUuw/vh1C4Kg6oBzQBJMKpvuLNZhm/mjoqbrS1K7GiXOAA5lBVONURgGT/AJzWH4jxCpVGkuJH6YGn1Pl7qut76MTOkxz9t/hacfFLfSytkbq44+f6QAqbiHEXPByZ5KrqXahfcYXVMMZ8jHtaguLrXpLjjnOwI/dCXFUazScRJy39/wC/yhqjsGBMOkD3Xbul+X9UTPOVlnPWuF8Sm2IQlSWkOBgjmpRdudgmCMEfumutjuVH/q9/xdcJ40HiHYcN/wC4VhcOa4brG1KRBDhgoyjxDEGZ6LLLj/jbDl/VXhe1o3WX4re95UAH5WmT68k+6unO8IxP2VcKDyYAwFfHhr2o5M9+Rsux/ao2720amaLycjem7r5gr0ix4tb1fyVWkgxBwZ9CvDLy2cGgncDlPLKKp3JZoeJ0kaXHpzaT8qrxzJlux7y5cC8y4R2sqtABdPUHO3mtRZdsKTh4wWn6KMuCwpyRpYd0XdR6Jlpete0Ob4gdiFMbkdIWfSq7OQuQuGuOqcKreqOo7HNHmnvYEPUrDkSpNWN0dT273SSb3iSNDsp/ZdhdaXdApYKtmjYzzTqtRrGlznQB5KZrD5LE9seLlz+4bs3L45nkE5BIi4p2hc9x0gaBgciYVU261nz3I/dBOfs1COr+JxB2GPMDcKpGnwe+6mWtOkDcjdxVS2r4nZJzzPmpLivqGpp9VXMf4z7LTGaqM/jRa9vQJEoYHb0H2UmrC3YgX1I1ouRvzVe7Id5uA+qtzQwsc2vGq7thaQ9u45dfJNfxhkSQdX6Y/dGVGqvq2g3URVB1+LuJw0D5KZb1nunPqcTnkApKlmAfLl/ZDtYRmMTuFSaL4raVaOgOGkObqbnMefmgm3lQbOKMqve8ND3Eho0tB5DoustwiCpqFdzmw4k+qlp05pFp6GPUbJmiApLI7goNFZVyfcT780eyqqq3YWOLDyJHsdkYStcb4yrTdmu076Hhy5k5AjHmF6NaXQrMbUbsROd14lb1YcPMmfhejfw+v5Y+kc6YI9DIP2WOc9aT41RpqSmDtHypmsJ2T+7PX6LIIm0srrqXkpIKcA7omA/dHokiNLkkAAWt5OK4HwkCOSTmnqkEV3caGOdGzSfgSvLK7zBcfzPdqK9N4xRPcVM/0O+y8svamT0GE8VREH7noCq+3P5s5RIdhyApPgrSQ7TtZB8jgjoeRQlI+M+wRN3gDzI+6Fon/ie6qM8q0FNOqmAVHRK5eOxC1/SEFuAXMDjEmc8yNgrm6MRCq7elqdMYEAfc/sjbmtBhYZ/W2HxFKaaadTCa5SoHUZyOyhpU2h+k7ET7hGOGUBWb4wJiZAPqqKiDRzPJJzE2paVqAb3jSGvy04z/AGPkp3Gco3skRCjpmCVPCi07pmV3kNf7H2yP3SJXKWWlvUY9QomP8KrGs8p6iqPhw9f2W5/hpcxdEdaZHvv+ywBMv9AtP2DrReUZManOHy0qcjx+PahVKY66O0JzT5rurosiQ94epHsud6f1H4RGoprggGaz+pJd0lJAQtbHJPJHNJ9VvmkKzY2SNW8dumihVMf0EfIheP3D916p2zd/2Z0CJIXlFwqxioYx2CgGnJRdJ3JAVjBWgqWvU8Hpsh6Bl5K7XdLR6rtg4gyOo3VRGS4oPXKjpd6ZUrGahqZg7lv3I8vJB1Xb9SQP7q74ierGyGB55PvlR3Bl6c2rAwoaOSSsW4luF1yj1LspaM1xQdx+Yf5yRbihqglw/wA5JlWm7Q21d9nRrVKjHNGnAbH59jMmTt05rO8gpHE6A0kkAyASYE9G7BMq7KcZo8rsgUw81wOXSVZBmOhy5X8Lj0OflNrck64BcB6ft/8AiJ9Tkr2mXn/P8C0/YmmXX9u0ci5x/wDiVl7ISVrf4au1cQDujHx8QPpKeSY9qFuOqRZG3yoxUXTVWBuF8bpOqDko9Q81wBqAd3v+Skm6WJIBgY7oFJTY6cqQv8k5rh0QGc7c1QLV07kgD5XlVw5emfxIrDuWAfr/AGK8vulcVPiB8t326oa4bKlNSMHZNcPjkrIA4nZarg1+bdunS11M7tcBDup1DYrK1FaUK2lsh0Yy05HweaqIqy45WoNe3ug4EtJfTxDSfyj7mPRV9sQXSeQ+pVaKpLi53MyjLQ4JPMotPGLMVQcLoCDpOyiKTlDRMAulIFJBmEKIHxt9f2UyGqHxN9Uyoi4dAUdbZcuAOpSJwkFn2RrNbdUy4tEmA54a5oJxJDsbTCZ2saxtzUDHBw1GXNjSSSTgDAwR9VRudy5LjqgEBNLlcJt0xxYNOeoHQJ9YyhrioQ5un0/uPhMqhpHS3zK1X8NsXlMfqD/sspUILjp25LR9hqum/oepb8tKWXwR7YaL95CjbSdKLaSkXHosQHbbOnyXX2x6qZ2pRkkckBF3B6rqf3h6JICaAeUJxHkk5vont2QGD/iTVEUm/wCo/wCfC87rrY/xCrTc6RyaB+5+6xtY5KvFX6DVWocOIwp6gUTlaQ7mS8KZ7BBJChuCQZGF11UlplVE0rSm05KMfVEQAgaEogJVUTUip2VEMwp7UjlH0np6EplTtcko5yCqnxD1RZchaxMj1QVNquJOZAO0jf0RBOEZxjira1KiwU9Bp7nHiMRA6BBCCDCIdgRxAAnouFwPM/QrlRvJcqtmDHqmh0H0PsELfVfFA5CPndFURkKvrmXk+ZTgrtFXXZCrF5QP/uN+pVM3ZGcFqaa9N3R7T8FFEfRXeQF1twoG5CY+VgBQrjmV01ggC4pveoA7vh5JILvB0SQBddEWmySSYeUduv8Avj/b7LK1OaSSqKnxA5RriStNC3iYfyJJKkpbZTldSSqv0c1dbukkkcEU1KxJJJRFQv3HqkkmHLj9wnWySSCQV/2TW7FcSQRUdx6qsO59SkknCqVuyksvzt/1D7rqSKI+irTb2C5c7riSwFDFJq6kg4SSSSCf/9k="
          title="Paella dish"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle}>
            {musicData.name}
          </Typography>
          {/* <IconButton color="secondary">
            <PlayCircleFilledWhiteIcon />
          </IconButton> */}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MusicCard;
