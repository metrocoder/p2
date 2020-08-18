package dev.project2.entities;


import javax.persistence.*;

@Entity
@Table(name="PROPERTY")
public class Property
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pid")
    private int pid;
    @Column(name="price")
    private double price;
    @Column(name="square_feet")
    private float square_feet;
    @Column(name="isSold")
    private boolean isSold;
    @Column(name="image_url")
    private String image_url;
    @Column(name="location")
    private String location;

    @ManyToOne
    @JoinColumn(name="aid")
    private Agent agent;

    @ManyToOne
    @JoinColumn(name = "ptid")
    private PropertyType propertyType;

    public Property()
    {
    }

    public Property(int pid, double price, float square_feet, boolean isSold, String image_url, String location)
    {
        this.pid = pid;
        this.price = price;
        this.square_feet = square_feet;
        this.isSold = isSold;
        this.image_url = image_url;
        this.location = location;
    }

    public int getPid()
    {
        return pid;
    }

    public void setPid(int pid)
    {
        this.pid = pid;
    }

    public double getPrice()
    {
        return price;
    }

    public void setPrice(double price)
    {
        this.price = price;
    }

    public float getSquare_feet()
    {
        return square_feet;
    }

    public void setSquare_feet(float square_feet)
    {
        this.square_feet = square_feet;
    }

    public boolean isSold()
    {
        return isSold;
    }

    public void setSold(boolean sold)
    {
        isSold = sold;
    }

    public String getImage_url()
    {
        return image_url;
    }

    public void setImage_url(String image_url)
    {
        this.image_url = image_url;
    }

    public String getLocation()
    {
        return location;
    }

    public void setLocation(String location)
    {
        this.location = location;
    }

    @Override
    public String toString()
    {
        return "Property{" +
                "pid=" + pid +
                ", price=" + price +
                ", square_feet=" + square_feet +
                ", isSold=" + isSold +
                ", image_url='" + image_url + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
